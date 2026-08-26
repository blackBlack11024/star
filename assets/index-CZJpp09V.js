(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cr="170",sc=0,Zr=1,ac=2,ul=1,fl=2,fn=3,Un=0,Et=1,Xt=2,vn=0,jn=1,Ti=2,Qr=3,Jr=4,rc=5,qn=100,oc=101,lc=102,cc=103,hc=104,dc=200,uc=201,fc=202,pc=203,za=204,Va=205,mc=206,gc=207,vc=208,_c=209,xc=210,Mc=211,yc=212,Sc=213,bc=214,Ga=0,Ha=1,Wa=2,wi=3,Xa=4,qa=5,$a=6,Ya=7,pl=0,Ec=1,Tc=2,Dn=0,wc=1,Ac=2,Cc=3,ml=4,Rc=5,Pc=6,Lc=7,gl=300,Ai=301,Ci=302,ja=303,Ka=304,Ks=306,Zi=1e3,Yn=1001,Za=1002,en=1003,Dc=1004,ls=1005,kt=1006,aa=1007,Ln=1008,yn=1009,vl=1010,_l=1011,Qi=1012,Rr=1013,Zn=1014,mn=1015,an=1016,Pr=1017,Lr=1018,Ri=1020,xl=35902,Ml=1021,yl=1022,$t=1023,Sl=1024,bl=1025,Si=1026,Pi=1027,El=1028,Dr=1029,Tl=1030,Ir=1031,Ur=1033,Os=33776,Bs=33777,ks=33778,zs=33779,Qa=35840,Ja=35841,er=35842,tr=35843,nr=36196,ir=37492,sr=37496,ar=37808,rr=37809,or=37810,lr=37811,cr=37812,hr=37813,dr=37814,ur=37815,fr=37816,pr=37817,mr=37818,gr=37819,vr=37820,_r=37821,Vs=36492,xr=36494,Mr=36495,wl=36283,yr=36284,Sr=36285,br=36286,Ic=3200,Uc=3201,Al=0,Nc=1,Pn="",Wt="srgb",Ii="srgb-linear",Zs="linear",tt="srgb",ei=7680,eo=519,Fc=512,Oc=513,Bc=514,Cl=515,kc=516,zc=517,Vc=518,Gc=519,Er=35044,to="300 es",gn=2e3,Hs=2001;class Qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let no=1234567;const ji=Math.PI/180,Ji=180/Math.PI;function _n(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[s&255]+St[s>>8&255]+St[s>>16&255]+St[s>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function Mt(s,e,t){return Math.max(e,Math.min(t,s))}function Nr(s,e){return(s%e+e)%e}function Hc(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Wc(s,e,t){return s!==e?(t-s)/(e-s):0}function Ki(s,e,t){return(1-t)*s+t*e}function Xc(s,e,t,n){return Ki(s,e,1-Math.exp(-t*n))}function qc(s,e=1){return e-Math.abs(Nr(s,e*2)-e)}function $c(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Yc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function jc(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Kc(s,e){return s+Math.random()*(e-s)}function Zc(s){return s*(.5-Math.random())}function Qc(s){s!==void 0&&(no=s);let e=no+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jc(s){return s*ji}function eh(s){return s*Ji}function th(s){return(s&s-1)===0&&s!==0}function nh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ih(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function sh(s,e,t,n,i){const a=Math.cos,r=Math.sin,o=a(t/2),l=r(t/2),c=a((e+n)/2),h=r((e+n)/2),d=a((e-n)/2),u=r((e-n)/2),p=a((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Jt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ah={DEG2RAD:ji,RAD2DEG:Ji,generateUUID:_n,clamp:Mt,euclideanModulo:Nr,mapLinear:Hc,inverseLerp:Wc,lerp:Ki,damp:Xc,pingpong:qc,smoothstep:$c,smootherstep:Yc,randInt:jc,randFloat:Kc,randFloatSpread:Zc,seededRandom:Qc,degToRad:Jc,radToDeg:eh,isPowerOfTwo:th,ceilPowerOfTwo:nh,floorPowerOfTwo:ih,setQuaternionFromProperEuler:sh,normalize:et,denormalize:Jt};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*i+e.x,this.y=a*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,a,r,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,l,c)}set(e,t,n,i,a,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],v=i[0],m=i[3],f=i[6],T=i[1],E=i[4],y=i[7],N=i[2],A=i[5],w=i[8];return a[0]=r*v+o*T+l*N,a[3]=r*m+o*E+l*A,a[6]=r*f+o*y+l*w,a[1]=c*v+h*T+d*N,a[4]=c*m+h*E+d*A,a[7]=c*f+h*y+d*w,a[2]=u*v+p*T+g*N,a[5]=u*m+p*E+g*A,a[8]=u*f+p*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*a*h+n*o*l+i*a*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*r-o*c,u=o*l-h*a,p=c*a-r*l,g=t*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*r)*v,e[3]=u*v,e[4]=(h*t-i*l)*v,e[5]=(i*a-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(r*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ra.makeScale(e,t)),this}rotate(e){return this.premultiply(ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new ke;function Rl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ws(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rh(){const s=Ws("canvas");return s.style.display="block",s}const io={};function qi(s){s in io||(io[s]=!0,console.warn(s))}function oh(s,e,t){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function lh(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ch(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ye={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===tt&&(s.r=xn(s.r),s.g=xn(s.g),s.b=xn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===tt&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pn?Zs:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function xn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const so=[.64,.33,.3,.6,.15,.06],ao=[.2126,.7152,.0722],ro=[.3127,.329],oo=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lo=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[Ii]:{primaries:so,whitePoint:ro,transfer:Zs,toXYZ:oo,fromXYZ:lo,luminanceCoefficients:ao,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:so,whitePoint:ro,transfer:tt,toXYZ:oo,fromXYZ:lo,luminanceCoefficients:ao,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}});let ti;class hh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ti===void 0&&(ti=Ws("canvas")),ti.width=e.width,ti.height=e.height;const n=ti.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=xn(a[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xn(t[n]/255)*255):t[n]=xn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dh=0;class Pl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=_n(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(oa(i[r].image)):a.push(oa(i[r]))}else a=oa(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function oa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uh=0;class Rt extends Qn{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Yn,i=Yn,a=kt,r=Ln,o=$t,l=yn,c=Rt.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=_n(),this.name="",this.source=new Pl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zi:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zi:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=gl;Rt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(p+1)/2,N=(f+1)/2,A=(h+u)/4,w=(d+v)/4,P=(g+m)/4;return E>y&&E>N?E<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(E),i=A/n,a=w/n):y>N?y<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(y),n=A/i,a=P/i):N<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(N),n=w/a,i=P/a),this.set(n,i,a,t),this}let T=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-v)/T,this.z=(u-h)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fh extends Qn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lt extends fh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ll extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ph extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=a[r+0],p=a[r+1],g=a[r+2],v=a[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==u||c!==p||h!==g){let m=1-o;const f=l*u+c*p+h*g+d*v,T=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const N=Math.sqrt(E),A=Math.atan2(N,f*T);m=Math.sin(m*A)/N,o=Math.sin(o*A)/N}const y=o*T;if(l=l*m+u*y,c=c*m+p*y,h=h*m+g*y,d=d*m+v*y,m===1-o){const N=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=N,c*=N,h*=N,d*=N}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,a,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=a[r],u=a[r+1],p=a[r+2],g=a[r+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(a/2),u=l(n/2),p=l(i/2),g=l(a/2);switch(r){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(a+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(a-c)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(r-i)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+i*c-a*l,this._y=i*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=a*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(co.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(co.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*i-o*n),h=2*(o*t-a*i),d=2*(a*n-r*t);return this.x=t+l*c+r*d-o*h,this.y=n+l*h+o*c-a*d,this.z=i+l*d+a*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-a*o,this.y=a*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new R,co=new ns;class is{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Kt):Kt.fromBufferAttribute(a,r),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cs.copy(n.boundingBox)),cs.applyMatrix4(e.matrixWorld),this.union(cs)}const i=e.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oi),hs.subVectors(this.max,Oi),ni.subVectors(e.a,Oi),ii.subVectors(e.b,Oi),si.subVectors(e.c,Oi),En.subVectors(ii,ni),Tn.subVectors(si,ii),On.subVectors(ni,si);let t=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-On.z,On.y,En.z,0,-En.x,Tn.z,0,-Tn.x,On.z,0,-On.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-On.y,On.x,0];return!ca(t,ni,ii,si,hs)||(t=[1,0,0,0,1,0,0,0,1],!ca(t,ni,ii,si,hs))?!1:(ds.crossVectors(En,Tn),t=[ds.x,ds.y,ds.z],ca(t,ni,ii,si,hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new R,new R,new R,new R,new R,new R,new R,new R],Kt=new R,cs=new is,ni=new R,ii=new R,si=new R,En=new R,Tn=new R,On=new R,Oi=new R,hs=new R,ds=new R,Bn=new R;function ca(s,e,t,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){Bn.fromArray(s,a);const o=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),h=n.dot(Bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const mh=new is,Bi=new R,ha=new R;class ss{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mh.setFromPoints(e).getCenter(n);let i=0;for(let a=0,r=e.length;a<r;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bi.subVectors(e,this.center);const t=Bi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Bi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bi.copy(e.center).add(ha)),this.expandByPoint(Bi.copy(e.center).sub(ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new R,da=new R,us=new R,wn=new R,ua=new R,fs=new R,fa=new R;class Fr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){da.copy(e).add(t).multiplyScalar(.5),us.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(da);const a=e.distanceTo(t)*.5,r=-this.direction.dot(us),o=wn.dot(this.direction),l=-wn.dot(us),c=wn.lengthSq(),h=Math.abs(1-r*r);let d,u,p,g;if(h>0)if(d=r*l-o,u=r*o-l,g=a*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,p=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u=-a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*a+o)),u=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(d=Math.max(0,-(r*a+o)),u=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c);else u=r>0?-a:a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(da).addScaledVector(us,u),p}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const n=cn.dot(this.direction),i=cn.dot(cn)-n*n,a=e.radius*e.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,i,a){ua.subVectors(t,e),fs.subVectors(n,e),fa.crossVectors(ua,fs);let r=this.direction.dot(fa),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;wn.subVectors(this.origin,e);const l=o*this.direction.dot(fs.crossVectors(wn,fs));if(l<0)return null;const c=o*this.direction.dot(ua.cross(wn));if(c<0||l+c>r)return null;const h=-o*wn.dot(fa);return h<0?null:this.at(h/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,i,a,r,o,l,c,h,d,u,p,g,v,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,l,c,h,d,u,p,g,v,m)}set(e,t,n,i,a,r,o,l,c,h,d,u,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ai.setFromMatrixColumn(e,0).length(),a=1/ai.setFromMatrixColumn(e,1).length(),r=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const u=r*h,p=r*d,g=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+p*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,g=c*h,v=c*d;t[0]=u+v*o,t[4]=g*o-p,t[8]=r*c,t[1]=r*d,t[5]=r*h,t[9]=-o,t[2]=p*o-g,t[6]=v+u*o,t[10]=r*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,g=c*h,v=c*d;t[0]=u-v*o,t[4]=-r*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=r*h,t[9]=v-u*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const u=r*h,p=r*d,g=o*h,v=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,p=r*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-u*d,t[8]=g*d+p,t[1]=d,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-v*d}else if(e.order==="XZY"){const u=r*l,p=r*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=r*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gh,e,vh)}lookAt(e,t,n){const i=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),An.crossVectors(n,It),An.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),An.crossVectors(n,It)),An.normalize(),ps.crossVectors(It,An),i[0]=An.x,i[4]=ps.x,i[8]=It.x,i[1]=An.y,i[5]=ps.y,i[9]=It.y,i[2]=An.z,i[6]=ps.z,i[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],T=n[3],E=n[7],y=n[11],N=n[15],A=i[0],w=i[4],P=i[8],S=i[12],x=i[1],C=i[5],k=i[9],F=i[13],W=i[2],$=i[6],X=i[10],Q=i[14],G=i[3],re=i[7],fe=i[11],q=i[15];return a[0]=r*A+o*x+l*W+c*G,a[4]=r*w+o*C+l*$+c*re,a[8]=r*P+o*k+l*X+c*fe,a[12]=r*S+o*F+l*Q+c*q,a[1]=h*A+d*x+u*W+p*G,a[5]=h*w+d*C+u*$+p*re,a[9]=h*P+d*k+u*X+p*fe,a[13]=h*S+d*F+u*Q+p*q,a[2]=g*A+v*x+m*W+f*G,a[6]=g*w+v*C+m*$+f*re,a[10]=g*P+v*k+m*X+f*fe,a[14]=g*S+v*F+m*Q+f*q,a[3]=T*A+E*x+y*W+N*G,a[7]=T*w+E*C+y*$+N*re,a[11]=T*P+E*k+y*X+N*fe,a[15]=T*S+E*F+y*Q+N*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+a*l*d-i*c*d-a*o*u+n*c*u+i*o*p-n*l*p)+v*(+t*l*p-t*c*u+a*r*u-i*r*p+i*c*h-a*l*h)+m*(+t*c*d-t*o*p-a*r*d+n*r*p+a*o*h-n*c*h)+f*(-i*o*h-t*l*d+t*o*u+i*r*d-n*r*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],T=d*m*c-v*u*c+v*l*p-o*m*p-d*l*f+o*u*f,E=g*u*c-h*m*c-g*l*p+r*m*p+h*l*f-r*u*f,y=h*v*c-g*d*c+g*o*p-r*v*p-h*o*f+r*d*f,N=g*d*l-h*v*l-g*o*u+r*v*u+h*o*m-r*d*m,A=t*T+n*E+i*y+a*N;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=T*w,e[1]=(v*u*a-d*m*a-v*i*p+n*m*p+d*i*f-n*u*f)*w,e[2]=(o*m*a-v*l*a+v*i*c-n*m*c-o*i*f+n*l*f)*w,e[3]=(d*l*a-o*u*a-d*i*c+n*u*c+o*i*p-n*l*p)*w,e[4]=E*w,e[5]=(h*m*a-g*u*a+g*i*p-t*m*p-h*i*f+t*u*f)*w,e[6]=(g*l*a-r*m*a-g*i*c+t*m*c+r*i*f-t*l*f)*w,e[7]=(r*u*a-h*l*a+h*i*c-t*u*c-r*i*p+t*l*p)*w,e[8]=y*w,e[9]=(g*d*a-h*v*a-g*n*p+t*v*p+h*n*f-t*d*f)*w,e[10]=(r*v*a-g*o*a+g*n*c-t*v*c-r*n*f+t*o*f)*w,e[11]=(h*o*a-r*d*a-h*n*c+t*d*c+r*n*p-t*o*p)*w,e[12]=N*w,e[13]=(h*v*i-g*d*i+g*n*u-t*v*u-h*n*m+t*d*m)*w,e[14]=(g*o*i-r*v*i-g*n*l+t*v*l+r*n*m-t*o*m)*w,e[15]=(r*d*i-h*o*i+h*n*l-t*d*l-r*n*u+t*o*u)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,r){return this.set(1,n,a,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,h=r+r,d=o+o,u=a*c,p=a*h,g=a*d,v=r*h,m=r*d,f=o*d,T=l*c,E=l*h,y=l*d,N=n.x,A=n.y,w=n.z;return i[0]=(1-(v+f))*N,i[1]=(p+y)*N,i[2]=(g-E)*N,i[3]=0,i[4]=(p-y)*A,i[5]=(1-(u+f))*A,i[6]=(m+T)*A,i[7]=0,i[8]=(g+E)*w,i[9]=(m-T)*w,i[10]=(1-(u+v))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let a=ai.set(i[0],i[1],i[2]).length();const r=ai.set(i[4],i[5],i[6]).length(),o=ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],Zt.copy(this);const c=1/a,h=1/r,d=1/o;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=h,Zt.elements[5]*=h,Zt.elements[6]*=h,Zt.elements[8]*=d,Zt.elements[9]*=d,Zt.elements[10]*=d,t.setFromRotationMatrix(Zt),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,i,a,r,o=gn){const l=this.elements,c=2*a/(t-e),h=2*a/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let p,g;if(o===gn)p=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===Hs)p=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,a,r,o=gn){const l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(r-a),u=(t+e)*c,p=(n+i)*h;let g,v;if(o===gn)g=(r+a)*d,v=-2*d;else if(o===Hs)g=a*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ai=new R,Zt=new rt,gh=new R(0,0,0),vh=new R(1,1,1),An=new R,ps=new R,It=new R,ho=new rt,uo=new ns;class Vt{constructor(e=0,t=0,n=0,i=Vt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Mt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ho.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ho,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uo.setFromEuler(this),this.setFromQuaternion(uo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vt.DEFAULT_ORDER="XYZ";class Dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _h=0;const fo=new R,ri=new ns,hn=new rt,ms=new R,ki=new R,xh=new R,Mh=new ns,po=new R(1,0,0),mo=new R(0,1,0),go=new R(0,0,1),vo={type:"added"},yh={type:"removed"},oi={type:"childadded",child:null},pa={type:"childremoved",child:null};class pt extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new R,t=new Vt,n=new ns,i=new R(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new ke}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.multiply(ri),this}rotateOnWorldAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.premultiply(ri),this}rotateX(e){return this.rotateOnAxis(po,e)}rotateY(e){return this.rotateOnAxis(mo,e)}rotateZ(e){return this.rotateOnAxis(go,e)}translateOnAxis(e,t){return fo.copy(e).applyQuaternion(this.quaternion),this.position.add(fo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(po,e)}translateY(e){return this.translateOnAxis(mo,e)}translateZ(e){return this.translateOnAxis(go,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ms.copy(e):ms.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(ki,ms,this.up):hn.lookAt(ms,ki,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),ri.setFromRotationMatrix(hn),this.quaternion.premultiply(ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vo),oi.child=e,this.dispatchEvent(oi),oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yh),pa.child=e,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vo),oi.child=e,this.dispatchEvent(oi),oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,e,xh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,Mh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),d=r(e.shapes),u=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DEFAULT_UP=new R(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new R,dn=new R,ma=new R,un=new R,li=new R,ci=new R,_o=new R,ga=new R,va=new R,_a=new R,xa=new nt,Ma=new nt,ya=new nt;class qt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Qt.subVectors(e,t),i.cross(Qt);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){Qt.subVectors(i,t),dn.subVectors(n,t),ma.subVectors(e,t);const r=Qt.dot(Qt),o=Qt.dot(dn),l=Qt.dot(ma),c=dn.dot(dn),h=dn.dot(ma),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,g=(r*h-o*l)*u;return a.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(e,t,n,i,a,r,o,l){return this.getBarycoord(e,t,n,i,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,un.x),l.addScaledVector(r,un.y),l.addScaledVector(o,un.z),l)}static getInterpolatedAttribute(e,t,n,i,a,r){return xa.setScalar(0),Ma.setScalar(0),ya.setScalar(0),xa.fromBufferAttribute(e,t),Ma.fromBufferAttribute(e,n),ya.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(xa,a.x),r.addScaledVector(Ma,a.y),r.addScaledVector(ya,a.z),r}static isFrontFacing(e,t,n,i){return Qt.subVectors(n,t),dn.subVectors(e,t),Qt.cross(dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Qt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,a){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let r,o;li.subVectors(i,n),ci.subVectors(a,n),ga.subVectors(e,n);const l=li.dot(ga),c=ci.dot(ga);if(l<=0&&c<=0)return t.copy(n);va.subVectors(e,i);const h=li.dot(va),d=ci.dot(va);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(li,r);_a.subVectors(e,a);const p=li.dot(_a),g=ci.dot(_a);if(g>=0&&p<=g)return t.copy(a);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ci,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return _o.subVectors(a,i),o=(d-h)/(d-h+(p-g)),t.copy(i).addScaledVector(_o,o);const f=1/(m+v+u);return r=v*f,o=u*f,t.copy(n).addScaledVector(li,r).addScaledVector(ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Il={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},gs={h:0,s:0,l:0};function Sa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=Nr(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=Sa(r,a,e+1/3),this.g=Sa(r,a,e),this.b=Sa(r,a,e-1/3)}return Ye.toWorkingColorSpace(this,i),this}setStyle(e,t=Wt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=Il[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Ye.fromWorkingColorSpace(bt.copy(this),e),Math.round(Mt(bt.r*255,0,255))*65536+Math.round(Mt(bt.g*255,0,255))*256+Math.round(Mt(bt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(bt.copy(this),t);const n=bt.r,i=bt.g,a=bt.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case n:l=(i-a)/d+(i<a?6:0);break;case i:l=(a-n)/d+2;break;case a:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Wt){Ye.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,i=bt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(gs);const n=Ki(Cn.h,gs.h,t),i=Ki(Cn.s,gs.s,t),a=Ki(Cn.l,gs.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Ue;Ue.NAMES=Il;let Sh=0;class Nn extends Qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=_n(),this.name="",this.blending=jn,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Va,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jn&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==za&&(n.blendSrc=this.blendSrc),this.blendDst!==Va&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=i(e.textures),r=i(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Kn extends Nn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.combine=pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=bh();function bh(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const a=new Uint32Array(2048),r=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,a[l]=c|h}for(let l=1024;l<2048;++l)a[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)r[l]=l<<23;r[31]=1199570944,r[32]=2147483648;for(let l=33;l<63;++l)r[l]=2147483648+(l-32<<23);r[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:a,exponentTable:r,offsetTable:o}}function Eh(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Mt(s,-65504,65504),pn.floatView[0]=s;const e=pn.uint32View[0],t=e>>23&511;return pn.baseTable[t]+((e&8388607)>>pn.shiftTable[t])}function Th(s){const e=s>>10;return pn.uint32View[0]=pn.mantissaTable[pn.offsetTable[e]+(s&1023)]+pn.exponentTable[e],pn.floatView[0]}const wh={toHalfFloat:Eh,fromHalfFloat:Th},ut=new R,vs=new Ae;class _t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Er,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vs.fromBufferAttribute(this,t),vs.applyMatrix3(e),this.setXY(t,vs.x,vs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),a=et(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Er&&(e.usage=this.usage),e}}class Ul extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nl extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ct extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ah=0;const Ht=new rt,ba=new pt,hi=new R,Ut=new is,zi=new is,vt=new R;class xt extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rl(e)?Nl:Ul)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ke().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,a=e.length;i<a;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ct(n,3))}else{for(let n=0,i=t.count;n<i;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];Ut.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];zi.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Ut.min,zi.min),Ut.expandByPoint(vt),vt.addVectors(Ut.max,zi.max),Ut.expandByPoint(vt)):(Ut.expandByPoint(zi.min),Ut.expandByPoint(zi.max))}Ut.getCenter(n);let i=0;for(let a=0,r=e.count;a<r;a++)vt.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(vt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)vt.fromBufferAttribute(o,c),l&&(hi.fromBufferAttribute(e,c),vt.add(hi)),i=Math.max(i,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new R,l[P]=new R;const c=new R,h=new R,d=new R,u=new Ae,p=new Ae,g=new Ae,v=new R,m=new R;function f(P,S,x){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,x),u.fromBufferAttribute(a,P),p.fromBufferAttribute(a,S),g.fromBufferAttribute(a,x),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),o[P].add(v),o[S].add(v),o[x].add(v),l[P].add(m),l[S].add(m),l[x].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,S=T.length;P<S;++P){const x=T[P],C=x.start,k=x.count;for(let F=C,W=C+k;F<W;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const E=new R,y=new R,N=new R,A=new R;function w(P){N.fromBufferAttribute(i,P),A.copy(N);const S=o[P];E.copy(S),E.sub(N.multiplyScalar(N.dot(S))).normalize(),y.crossVectors(A,S);const C=y.dot(l[P])<0?-1:1;r.setXYZW(P,E.x,E.y,E.z,C)}for(let P=0,S=T.length;P<S;++P){const x=T[P],C=x.start,k=x.count;for(let F=C,W=C+k;F<W;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new R,a=new R,r=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),h.subVectors(r,a),d.subVectors(i,a),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,a),d.subVectors(i,a),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new _t(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],d=a[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xo=new rt,kn=new Fr,_s=new ss,Mo=new R,xs=new R,Ms=new R,ys=new R,Ea=new R,Ss=new R,yo=new R,bs=new R;class He extends pt{constructor(e=new xt,t=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){Ss.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(Ea.fromBufferAttribute(d,e),r?Ss.addScaledVector(Ea,h):Ss.addScaledVector(Ea.sub(t),h))}t.add(Ss)}return t}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(a),kn.copy(e.ray).recast(e.near),!(_s.containsPoint(kn.origin)===!1&&(kn.intersectSphere(_s,Mo)===null||kn.origin.distanceToSquared(Mo)>(e.far-e.near)**2))&&(xo.copy(a).invert(),kn.copy(e.ray).applyMatrix4(xo),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,kn)))}_computeIntersections(e,t,n){let i;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=r[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=T,N=E;y<N;y+=3){const A=o.getX(y),w=o.getX(y+1),P=o.getX(y+2);i=Es(this,f,e,n,c,h,d,A,w,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const T=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);i=Es(this,r,e,n,c,h,d,T,E,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=r[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=T,N=E;y<N;y+=3){const A=y,w=y+1,P=y+2;i=Es(this,f,e,n,c,h,d,A,w,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const T=m,E=m+1,y=m+2;i=Es(this,r,e,n,c,h,d,T,E,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Ch(s,e,t,n,i,a,r,o){let l;if(e.side===Et?l=n.intersectTriangle(r,a,i,!0,o):l=n.intersectTriangle(i,a,r,e.side===Un,o),l===null)return null;bs.copy(o),bs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(bs);return c<t.near||c>t.far?null:{distance:c,point:bs.clone(),object:s}}function Es(s,e,t,n,i,a,r,o,l,c){s.getVertexPosition(o,xs),s.getVertexPosition(l,Ms),s.getVertexPosition(c,ys);const h=Ch(s,e,t,n,xs,Ms,ys,yo);if(h){const d=new R;qt.getBarycoord(yo,xs,Ms,ys,d),i&&(h.uv=qt.getInterpolatedAttribute(i,o,l,c,d,new Ae)),a&&(h.uv1=qt.getInterpolatedAttribute(a,o,l,c,d,new Ae)),r&&(h.normal=qt.getInterpolatedAttribute(r,o,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};qt.getNormal(xs,Ms,ys,u.normal),h.face=u,h.barycoord=d}return h}class sn extends xt{constructor(e=1,t=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,a,4),g("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(d,2));function g(v,m,f,T,E,y,N,A,w,P,S){const x=y/w,C=N/P,k=y/2,F=N/2,W=A/2,$=w+1,X=P+1;let Q=0,G=0;const re=new R;for(let fe=0;fe<X;fe++){const q=fe*C-F;for(let ie=0;ie<$;ie++){const he=ie*x-k;re[v]=he*T,re[m]=q*E,re[f]=W,c.push(re.x,re.y,re.z),re[v]=0,re[m]=0,re[f]=A>0?1:-1,h.push(re.x,re.y,re.z),d.push(ie/w),d.push(1-fe/P),Q+=1}}for(let fe=0;fe<P;fe++)for(let q=0;q<w;q++){const ie=u+q+$*fe,he=u+q+$*(fe+1),V=u+(q+1)+$*(fe+1),j=u+(q+1)+$*fe;l.push(ie,he,j),l.push(he,V,j),G+=6}o.addGroup(p,G,S),p+=G,u+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Li(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wt(s){const e={};for(let t=0;t<s.length;t++){const n=Li(s[t]);for(const i in n)e[i]=n[i]}return e}function Rh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Fl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const es={clone:Li,merge:wt};var Ph=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ft extends Nn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ph,this.fragmentShader=Lh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=Rh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ol extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new R,So=new Ae,bo=new Ae;class Bt extends Ol{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ji*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,So,bo),t.subVectors(bo,So)}setViewOffset(e,t,n,i,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ji*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const di=-90,ui=1;class Dh extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Bt(di,ui,e,t);i.layers=this.layers,this.add(i);const a=new Bt(di,ui,e,t);a.layers=this.layers,this.add(a);const r=new Bt(di,ui,e,t);r.layers=this.layers,this.add(r);const o=new Bt(di,ui,e,t);o.layers=this.layers,this.add(o);const l=new Bt(di,ui,e,t);l.layers=this.layers,this.add(l);const c=new Bt(di,ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,a),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bl extends Rt{constructor(e,t,n,i,a,r,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ai,super(e,t,n,i,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ih extends Lt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Bl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new sn(5,5,5),a=new ft({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Et,blending:vn});a.uniforms.tEquirect.value=t;const r=new He(i,a),o=t.minFilter;return t.minFilter===Ln&&(t.minFilter=kt),new Dh(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(a)}}const Ta=new R,Uh=new R,Nh=new ke;class Wn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ta.subVectors(n,t).cross(Uh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ta),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nh.getNormalMatrix(e),i=this.coplanarPoint(Ta).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new ss,Ts=new R;class Or{constructor(e=new Wn,t=new Wn,n=new Wn,i=new Wn,a=new Wn,r=new Wn){this.planes=[e,t,n,i,a,r]}set(e,t,n,i,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn){const n=this.planes,i=e.elements,a=i[0],r=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],p=i[8],g=i[9],v=i[10],m=i[11],f=i[12],T=i[13],E=i[14],y=i[15];if(n[0].setComponents(l-a,u-c,m-p,y-f).normalize(),n[1].setComponents(l+a,u+c,m+p,y+f).normalize(),n[2].setComponents(l+r,u+h,m+g,y+T).normalize(),n[3].setComponents(l-r,u-h,m-g,y-T).normalize(),n[4].setComponents(l-o,u-d,m-v,y-E).normalize(),t===gn)n[5].setComponents(l+o,u+d,m+v,y+E).normalize();else if(t===Hs)n[5].setComponents(o,d,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(e){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ts.x=i.normal.x>0?e.max.x:e.min.x,Ts.y=i.normal.y>0?e.max.y:e.min.y,Ts.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kl(){let s=null,e=!1,t=null,n=null;function i(a,r){t(a,r),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function Fh(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:a,update:r}}class Mn extends xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const T=f*u-r;for(let E=0;E<c;E++){const y=E*d-a;g.push(y,-T,0),v.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const E=T+c*f,y=T+c*(f+1),N=T+1+c*(f+1),A=T+1+c*f;p.push(E,y,A),p.push(y,N,A)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Oh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bh=`#ifdef USE_ALPHAHASH
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
#endif`,kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hh=`#ifdef USE_AOMAP
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
#endif`,Wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xh=`#ifdef USE_BATCHING
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
#endif`,qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$h=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kh=`#ifdef USE_IRIDESCENCE
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
#endif`,Zh=`#ifdef USE_BUMPMAP
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
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rd=`#define PI 3.141592653589793
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
} // validated`,od=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ld=`vec3 transformedNormal = objectNormal;
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
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",pd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vd=`#ifdef USE_ENVMAP
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
#endif`,_d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
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
#endif`,Md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ed=`#ifdef USE_GRADIENTMAP
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
}`,Td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cd=`uniform bool receiveShadow;
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
#endif`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ud=`PhysicalMaterial material;
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
#endif`,Nd=`struct PhysicalMaterial {
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
}`,Fd=`
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
#endif`,Od=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qd=`#if defined( USE_POINTS_UV )
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
#endif`,$d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qd=`#ifdef USE_MORPHTARGETS
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
#endif`,Jd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,su=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,au=`#ifdef USE_NORMALMAP
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
#endif`,ru=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ou=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,du=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_u=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yu=`float getShadowMask() {
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
}`,Su=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bu=`#ifdef USE_SKINNING
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
#endif`,Eu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tu=`#ifdef USE_SKINNING
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
#endif`,wu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Au=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ru=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pu=`#ifdef USE_TRANSMISSION
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
#endif`,Lu=`#ifdef USE_TRANSMISSION
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
#endif`,Du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ou=`uniform sampler2D t2D;
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
}`,Bu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ku=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gu=`#include <common>
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
}`,Hu=`#if DEPTH_PACKING == 3200
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
}`,Wu=`#define DISTANCE
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
}`,Xu=`#define DISTANCE
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
}`,qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$u=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yu=`uniform float scale;
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
}`,ju=`uniform vec3 diffuse;
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
}`,Ku=`#include <common>
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
}`,Zu=`uniform vec3 diffuse;
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
}`,Qu=`#define LAMBERT
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
}`,Ju=`#define LAMBERT
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
}`,ef=`#define MATCAP
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
}`,tf=`#define MATCAP
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
}`,nf=`#define NORMAL
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
}`,sf=`#define NORMAL
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
}`,af=`#define PHONG
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
}`,rf=`#define PHONG
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
}`,of=`#define STANDARD
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
}`,lf=`#define STANDARD
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
}`,cf=`#define TOON
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
}`,hf=`#define TOON
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
}`,df=`uniform float size;
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
}`,uf=`uniform vec3 diffuse;
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
}`,ff=`#include <common>
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
}`,pf=`uniform vec3 color;
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
}`,mf=`uniform float rotation;
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
}`,gf=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Oh,alphahash_pars_fragment:Bh,alphamap_fragment:kh,alphamap_pars_fragment:zh,alphatest_fragment:Vh,alphatest_pars_fragment:Gh,aomap_fragment:Hh,aomap_pars_fragment:Wh,batching_pars_vertex:Xh,batching_vertex:qh,begin_vertex:$h,beginnormal_vertex:Yh,bsdfs:jh,iridescence_fragment:Kh,bumpmap_pars_fragment:Zh,clipping_planes_fragment:Qh,clipping_planes_pars_fragment:Jh,clipping_planes_pars_vertex:ed,clipping_planes_vertex:td,color_fragment:nd,color_pars_fragment:id,color_pars_vertex:sd,color_vertex:ad,common:rd,cube_uv_reflection_fragment:od,defaultnormal_vertex:ld,displacementmap_pars_vertex:cd,displacementmap_vertex:hd,emissivemap_fragment:dd,emissivemap_pars_fragment:ud,colorspace_fragment:fd,colorspace_pars_fragment:pd,envmap_fragment:md,envmap_common_pars_fragment:gd,envmap_pars_fragment:vd,envmap_pars_vertex:_d,envmap_physical_pars_fragment:Rd,envmap_vertex:xd,fog_vertex:Md,fog_pars_vertex:yd,fog_fragment:Sd,fog_pars_fragment:bd,gradientmap_pars_fragment:Ed,lightmap_pars_fragment:Td,lights_lambert_fragment:wd,lights_lambert_pars_fragment:Ad,lights_pars_begin:Cd,lights_toon_fragment:Pd,lights_toon_pars_fragment:Ld,lights_phong_fragment:Dd,lights_phong_pars_fragment:Id,lights_physical_fragment:Ud,lights_physical_pars_fragment:Nd,lights_fragment_begin:Fd,lights_fragment_maps:Od,lights_fragment_end:Bd,logdepthbuf_fragment:kd,logdepthbuf_pars_fragment:zd,logdepthbuf_pars_vertex:Vd,logdepthbuf_vertex:Gd,map_fragment:Hd,map_pars_fragment:Wd,map_particle_fragment:Xd,map_particle_pars_fragment:qd,metalnessmap_fragment:$d,metalnessmap_pars_fragment:Yd,morphinstance_vertex:jd,morphcolor_vertex:Kd,morphnormal_vertex:Zd,morphtarget_pars_vertex:Qd,morphtarget_vertex:Jd,normal_fragment_begin:eu,normal_fragment_maps:tu,normal_pars_fragment:nu,normal_pars_vertex:iu,normal_vertex:su,normalmap_pars_fragment:au,clearcoat_normal_fragment_begin:ru,clearcoat_normal_fragment_maps:ou,clearcoat_pars_fragment:lu,iridescence_pars_fragment:cu,opaque_fragment:hu,packing:du,premultiplied_alpha_fragment:uu,project_vertex:fu,dithering_fragment:pu,dithering_pars_fragment:mu,roughnessmap_fragment:gu,roughnessmap_pars_fragment:vu,shadowmap_pars_fragment:_u,shadowmap_pars_vertex:xu,shadowmap_vertex:Mu,shadowmask_pars_fragment:yu,skinbase_vertex:Su,skinning_pars_vertex:bu,skinning_vertex:Eu,skinnormal_vertex:Tu,specularmap_fragment:wu,specularmap_pars_fragment:Au,tonemapping_fragment:Cu,tonemapping_pars_fragment:Ru,transmission_fragment:Pu,transmission_pars_fragment:Lu,uv_pars_fragment:Du,uv_pars_vertex:Iu,uv_vertex:Uu,worldpos_vertex:Nu,background_vert:Fu,background_frag:Ou,backgroundCube_vert:Bu,backgroundCube_frag:ku,cube_vert:zu,cube_frag:Vu,depth_vert:Gu,depth_frag:Hu,distanceRGBA_vert:Wu,distanceRGBA_frag:Xu,equirect_vert:qu,equirect_frag:$u,linedashed_vert:Yu,linedashed_frag:ju,meshbasic_vert:Ku,meshbasic_frag:Zu,meshlambert_vert:Qu,meshlambert_frag:Ju,meshmatcap_vert:ef,meshmatcap_frag:tf,meshnormal_vert:nf,meshnormal_frag:sf,meshphong_vert:af,meshphong_frag:rf,meshphysical_vert:of,meshphysical_frag:lf,meshtoon_vert:cf,meshtoon_frag:hf,points_vert:df,points_frag:uf,shadow_vert:ff,shadow_frag:pf,sprite_vert:mf,sprite_frag:gf},ae={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},nn={basic:{uniforms:wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:wt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:wt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:wt([ae.points,ae.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:wt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:wt([ae.common,ae.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:wt([ae.sprite,ae.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:wt([ae.common,ae.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:wt([ae.lights,ae.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};nn.physical={uniforms:wt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ws={r:0,b:0,g:0},Vn=new Vt,vf=new rt;function _f(s,e,t,n,i,a,r){const o=new Ue(0);let l=a===!0?0:1,c,h,d=null,u=0,p=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function v(T){let E=!1;const y=g(T);y===null?f(o,l):y&&y.isColor&&(f(y,1),E=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,r):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(T,E){const y=g(E);y&&(y.isCubeTexture||y.mapping===Ks)?(h===void 0&&(h=new He(new sn(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:Li(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Vn.copy(E.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vf.makeRotationFromEuler(Vn)),h.material.toneMapped=Ye.getTransfer(y.colorSpace)!==tt,(d!==y||u!==y.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,p=s.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new He(new Mn(2,2),new ft({name:"BackgroundMaterial",uniforms:Li(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(y.colorSpace)!==tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,p=s.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,E){T.getRGB(ws,Fl(s)),n.buffers.color.setClear(ws.r,ws.g,ws.b,E,r)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),l=E,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(o,l)},render:v,addToRenderList:m}}function xf(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let a=i,r=!1;function o(x,C,k,F,W){let $=!1;const X=d(F,k,C);a!==X&&(a=X,c(a.object)),$=p(x,F,k,W),$&&g(x,F,k,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,y(x,C,k,F),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function d(x,C,k){const F=k.wireframe===!0;let W=n[x.id];W===void 0&&(W={},n[x.id]=W);let $=W[C.id];$===void 0&&($={},W[C.id]=$);let X=$[F];return X===void 0&&(X=u(l()),$[F]=X),X}function u(x){const C=[],k=[],F=[];for(let W=0;W<t;W++)C[W]=0,k[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:F,object:x,attributes:{},index:null}}function p(x,C,k,F){const W=a.attributes,$=C.attributes;let X=0;const Q=k.getAttributes();for(const G in Q)if(Q[G].location>=0){const fe=W[G];let q=$[G];if(q===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(q=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(q=x.instanceColor)),fe===void 0||fe.attribute!==q||q&&fe.data!==q.data)return!0;X++}return a.attributesNum!==X||a.index!==F}function g(x,C,k,F){const W={},$=C.attributes;let X=0;const Q=k.getAttributes();for(const G in Q)if(Q[G].location>=0){let fe=$[G];fe===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(fe=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(fe=x.instanceColor));const q={};q.attribute=fe,fe&&fe.data&&(q.data=fe.data),W[G]=q,X++}a.attributes=W,a.attributesNum=X,a.index=F}function v(){const x=a.newAttributes;for(let C=0,k=x.length;C<k;C++)x[C]=0}function m(x){f(x,0)}function f(x,C){const k=a.newAttributes,F=a.enabledAttributes,W=a.attributeDivisors;k[x]=1,F[x]===0&&(s.enableVertexAttribArray(x),F[x]=1),W[x]!==C&&(s.vertexAttribDivisor(x,C),W[x]=C)}function T(){const x=a.newAttributes,C=a.enabledAttributes;for(let k=0,F=C.length;k<F;k++)C[k]!==x[k]&&(s.disableVertexAttribArray(k),C[k]=0)}function E(x,C,k,F,W,$,X){X===!0?s.vertexAttribIPointer(x,C,k,W,$):s.vertexAttribPointer(x,C,k,F,W,$)}function y(x,C,k,F){v();const W=F.attributes,$=k.getAttributes(),X=C.defaultAttributeValues;for(const Q in $){const G=$[Q];if(G.location>=0){let re=W[Q];if(re===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(re=x.instanceColor)),re!==void 0){const fe=re.normalized,q=re.itemSize,ie=e.get(re);if(ie===void 0)continue;const he=ie.buffer,V=ie.type,j=ie.bytesPerElement,se=V===s.INT||V===s.UNSIGNED_INT||re.gpuType===Rr;if(re.isInterleavedBufferAttribute){const ee=re.data,me=ee.stride,be=re.offset;if(ee.isInstancedInterleavedBuffer){for(let Ce=0;Ce<G.locationSize;Ce++)f(G.location+Ce,ee.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ce=0;Ce<G.locationSize;Ce++)m(G.location+Ce);s.bindBuffer(s.ARRAY_BUFFER,he);for(let Ce=0;Ce<G.locationSize;Ce++)E(G.location+Ce,q/G.locationSize,V,fe,me*j,(be+q/G.locationSize*Ce)*j,se)}else{if(re.isInstancedBufferAttribute){for(let ee=0;ee<G.locationSize;ee++)f(G.location+ee,re.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ee=0;ee<G.locationSize;ee++)m(G.location+ee);s.bindBuffer(s.ARRAY_BUFFER,he);for(let ee=0;ee<G.locationSize;ee++)E(G.location+ee,q/G.locationSize,V,fe,q*j,q/G.locationSize*ee*j,se)}}else if(X!==void 0){const fe=X[Q];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv(G.location,fe);break;case 3:s.vertexAttrib3fv(G.location,fe);break;case 4:s.vertexAttrib4fv(G.location,fe);break;default:s.vertexAttrib1fv(G.location,fe)}}}}T()}function N(){P();for(const x in n){const C=n[x];for(const k in C){const F=C[k];for(const W in F)h(F[W].object),delete F[W];delete C[k]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const k in C){const F=C[k];for(const W in F)h(F[W].object),delete F[W];delete C[k]}delete n[x.id]}function w(x){for(const C in n){const k=n[C];if(k[x.id]===void 0)continue;const F=k[x.id];for(const W in F)h(F[W].object),delete F[W];delete k[x.id]}}function P(){S(),r=!0,a!==i&&(a=i,c(a.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:N,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function Mf(s,e,t){let n;function i(c){n=c}function a(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function r(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,n,1)}function l(c,h,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*u[v];t.update(g,n,1)}}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function yf(s,e,t,n){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){return!(w!==$t&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===an&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==yn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==mn&&!P)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:N,maxSamples:A}}function Sf(s){const e=this;let t=null,n=0,i=!1,a=!1;const r=new Wn,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!i||g===null||g.length===0||a&&!m)a?h(null):c();else{const T=a?0:n,E=T*4;let y=f.clippingState||null;l.value=y,y=h(g,u,E,p);for(let N=0;N!==E;++N)y[N]=t[N];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,y=p;E!==v;++E,y+=4)r.copy(d[E]).applyMatrix4(T,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function bf(s){let e=new WeakMap;function t(r,o){return o===ja?r.mapping=Ai:o===Ka&&(r.mapping=Ci),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===ja||o===Ka)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Ih(l.height);return c.fromEquirectangularTexture(s,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Qs extends Ol{constructor(e=-1,t=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mi=4,Eo=[.125,.215,.35,.446,.526,.582],$n=20,wa=new Qs,To=new Ue;let Aa=null,Ca=0,Ra=0,Pa=!1;const Xn=(1+Math.sqrt(5))/2,fi=1/Xn,wo=[new R(-Xn,fi,0),new R(Xn,fi,0),new R(-fi,0,Xn),new R(fi,0,Xn),new R(0,Xn,-fi),new R(0,Xn,fi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Ao{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Aa=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Po(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ro(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Aa,Ca,Ra),this._renderer.xr.enabled=Pa,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Aa=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:an,format:$t,colorSpace:Ii,depthBuffer:!1},i=Co(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Co(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ef(a)),this._blurMaterial=Tf(a,e,t)}return i}_compileMaterial(e){const t=new He(this._lodPlanes[0],e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,n,i){const o=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(To),h.toneMapping=Dn,h.autoClear=!1;const p=new Kn({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),g=new He(new sn,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(To),v=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):T===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const E=this._cubeSize;As(i,T*E,f>2?E:0,E,E),h.setRenderTarget(i),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ai||e.mapping===Ci;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Po()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ro());const a=i?this._cubemapMaterial:this._equirectMaterial,r=new He(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;As(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=wo[(i-a-1)%wo.length];this._blur(e,a-1,a,r,o)}t.autoClear=n}_blur(e,t,n,i,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",a),this._halfBlur(r,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new He(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*$n-1),v=a/g,m=isFinite(a)?1+Math.floor(h*v):$n;m>$n&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const f=[];let T=0;for(let w=0;w<$n;++w){const P=w/v,S=Math.exp(-P*P/2);f.push(S),w===0?T+=S:w<m&&(T+=2*S)}for(let w=0;w<f.length;w++)f[w]=f[w]/T;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-n;const y=this._sizeLods[i],N=3*y*(i>E-Mi?i-E+Mi:0),A=4*(this._cubeSize-y);As(t,N,A,3*y,2*y),l.setRenderTarget(t),l.render(d,wa)}}function Ef(s){const e=[],t=[],n=[];let i=s;const a=s-Mi+1+Eo.length;for(let r=0;r<a;r++){const o=Math.pow(2,i);t.push(o);let l=1/o;r>s-Mi?l=Eo[r-s+Mi-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,v=3,m=2,f=1,T=new Float32Array(v*g*p),E=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,P=A>2?0:-1,S=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];T.set(S,v*g*A),E.set(u,m*g*A);const x=[A,A,A,A,A,A];y.set(x,f*g*A)}const N=new xt;N.setAttribute("position",new _t(T,v)),N.setAttribute("uv",new _t(E,m)),N.setAttribute("faceIndex",new _t(y,f)),e.push(N),i>Mi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Co(s,e,t){const n=new Lt(s,e,t);return n.texture.mapping=Ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Tf(s,e,t){const n=new Float32Array($n),i=new R(0,1,0);return new ft({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Br(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Ro(){return new ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Br(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Po(){return new ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Br(){return`

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
	`}function wf(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ja||l===Ka,h=l===Ai||l===Ci;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Ao(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Ao(s)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Af(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&qi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Cf(s,e,t,n){const i={},a=new WeakMap;function r(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}u.removeEventListener("dispose",r),delete i[u.id];const p=a.get(u);p&&(e.remove(p),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],s.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],s.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let E=0,y=T.length;E<y;E+=3){const N=T[E+0],A=T[E+1],w=T[E+2];u.push(N,A,A,w,w,N)}}else if(g!==void 0){const T=g.array;v=g.version;for(let E=0,y=T.length/3-1;E<y;E+=3){const N=E+0,A=E+1,w=E+2;u.push(N,A,A,w,w,N)}}else return;const m=new(Rl(u)?Nl:Ul)(u,1);m.version=v;const f=a.get(d);f&&e.remove(f),a.set(d,m)}function h(d){const u=a.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Rf(s,e,t){let n;function i(u){n=u}let a,r;function o(u){a=u.type,r=u.bytesPerElement}function l(u,p){s.drawElements(n,p,a,u*r),t.update(p,n,1)}function c(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,a,u*r,g),t.update(p,n,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function d(u,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/r,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,u,0,v,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*v[T];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Pf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=o*(a/3);break;case s.LINES:t.lines+=o*(a/2);break;case s.LINE_STRIP:t.lines+=o*(a-1);break;case s.LINE_LOOP:t.lines+=o*a;break;case s.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Lf(s,e,t){const n=new WeakMap,i=new nt;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let x=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var p=x;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let N=o.attributes.position.count*y,A=1;N>e.maxTextureSize&&(A=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const w=new Float32Array(N*A*4*d),P=new Ll(w,N,A,d);P.type=mn,P.needsUpdate=!0;const S=y*4;for(let C=0;C<d;C++){const k=f[C],F=T[C],W=E[C],$=N*A*4*C;for(let X=0;X<k.count;X++){const Q=X*S;g===!0&&(i.fromBufferAttribute(k,X),w[$+Q+0]=i.x,w[$+Q+1]=i.y,w[$+Q+2]=i.z,w[$+Q+3]=0),v===!0&&(i.fromBufferAttribute(F,X),w[$+Q+4]=i.x,w[$+Q+5]=i.y,w[$+Q+6]=i.z,w[$+Q+7]=0),m===!0&&(i.fromBufferAttribute(W,X),w[$+Q+8]=i.x,w[$+Q+9]=i.y,w[$+Q+10]=i.z,w[$+Q+11]=W.itemSize===4?i.w:1)}}u={count:d,texture:P,size:new Ae(N,A)},n.set(o,u),o.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:a}}function Df(s,e,t,n){let i=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:r}}class zl extends Rt{constructor(e,t,n,i,a,r,o,l,c,h=Si){if(h!==Si&&h!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Si&&(n=Zn),n===void 0&&h===Pi&&(n=Ri),super(null,i,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Vl=new Rt,Lo=new zl(1,1),Gl=new Ll,Hl=new ph,Wl=new Bl,Do=[],Io=[],Uo=new Float32Array(16),No=new Float32Array(9),Fo=new Float32Array(4);function Ui(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let a=Do[i];if(a===void 0&&(a=new Float32Array(i),Do[i]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,s[r].toArray(a,o)}return a}function mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function gt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Js(s,e){let t=Io[e];t===void 0&&(t=new Int32Array(e),Io[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function If(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Uf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2fv(this.addr,e),gt(t,e)}}function Nf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;s.uniform3fv(this.addr,e),gt(t,e)}}function Ff(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4fv(this.addr,e),gt(t,e)}}function Of(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Fo.set(n),s.uniformMatrix2fv(this.addr,!1,Fo),gt(t,n)}}function Bf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;No.set(n),s.uniformMatrix3fv(this.addr,!1,No),gt(t,n)}}function kf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Uo.set(n),s.uniformMatrix4fv(this.addr,!1,Uo),gt(t,n)}}function zf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Vf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2iv(this.addr,e),gt(t,e)}}function Gf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;s.uniform3iv(this.addr,e),gt(t,e)}}function Hf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4iv(this.addr,e),gt(t,e)}}function Wf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Xf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2uiv(this.addr,e),gt(t,e)}}function qf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;s.uniform3uiv(this.addr,e),gt(t,e)}}function $f(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4uiv(this.addr,e),gt(t,e)}}function Yf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(Lo.compareFunction=Cl,a=Lo):a=Vl,t.setTexture2D(e||a,i)}function jf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hl,i)}function Kf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Wl,i)}function Zf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Gl,i)}function Qf(s){switch(s){case 5126:return If;case 35664:return Uf;case 35665:return Nf;case 35666:return Ff;case 35674:return Of;case 35675:return Bf;case 35676:return kf;case 5124:case 35670:return zf;case 35667:case 35671:return Vf;case 35668:case 35672:return Gf;case 35669:case 35673:return Hf;case 5125:return Wf;case 36294:return Xf;case 36295:return qf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return jf;case 35680:case 36300:case 36308:case 36293:return Kf;case 36289:case 36303:case 36311:case 36292:return Zf}}function Jf(s,e){s.uniform1fv(this.addr,e)}function ep(s,e){const t=Ui(e,this.size,2);s.uniform2fv(this.addr,t)}function tp(s,e){const t=Ui(e,this.size,3);s.uniform3fv(this.addr,t)}function np(s,e){const t=Ui(e,this.size,4);s.uniform4fv(this.addr,t)}function ip(s,e){const t=Ui(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function sp(s,e){const t=Ui(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ap(s,e){const t=Ui(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function rp(s,e){s.uniform1iv(this.addr,e)}function op(s,e){s.uniform2iv(this.addr,e)}function lp(s,e){s.uniform3iv(this.addr,e)}function cp(s,e){s.uniform4iv(this.addr,e)}function hp(s,e){s.uniform1uiv(this.addr,e)}function dp(s,e){s.uniform2uiv(this.addr,e)}function up(s,e){s.uniform3uiv(this.addr,e)}function fp(s,e){s.uniform4uiv(this.addr,e)}function pp(s,e,t){const n=this.cache,i=e.length,a=Js(t,i);mt(n,a)||(s.uniform1iv(this.addr,a),gt(n,a));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Vl,a[r])}function mp(s,e,t){const n=this.cache,i=e.length,a=Js(t,i);mt(n,a)||(s.uniform1iv(this.addr,a),gt(n,a));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Hl,a[r])}function gp(s,e,t){const n=this.cache,i=e.length,a=Js(t,i);mt(n,a)||(s.uniform1iv(this.addr,a),gt(n,a));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Wl,a[r])}function vp(s,e,t){const n=this.cache,i=e.length,a=Js(t,i);mt(n,a)||(s.uniform1iv(this.addr,a),gt(n,a));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Gl,a[r])}function _p(s){switch(s){case 5126:return Jf;case 35664:return ep;case 35665:return tp;case 35666:return np;case 35674:return ip;case 35675:return sp;case 35676:return ap;case 5124:case 35670:return rp;case 35667:case 35671:return op;case 35668:case 35672:return lp;case 35669:case 35673:return cp;case 5125:return hp;case 36294:return dp;case 36295:return up;case 36296:return fp;case 35678:case 36198:case 36298:case 36306:case 35682:return pp;case 35679:case 36299:case 36307:return mp;case 35680:case 36300:case 36308:case 36293:return gp;case 36289:case 36303:case 36311:case 36292:return vp}}class xp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qf(t.type)}}class Mp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_p(t.type)}}class yp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(e,t[o.id],n)}}}const La=/(\w+)(\])?(\[|\.)?/g;function Oo(s,e){s.seq.push(e),s.map[e.id]=e}function Sp(s,e,t){const n=s.name,i=n.length;for(La.lastIndex=0;;){const a=La.exec(n),r=La.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Oo(t,c===void 0?new xp(o,s,e):new Mp(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new yp(o),Oo(t,d)),t=d}}}class Gs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=e.getActiveUniform(t,i),r=e.getUniformLocation(t,a.name);Sp(a,r,this)}}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Bo(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const bp=37297;let Ep=0;function Tp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const ko=new ke;function wp(s){Ye._getMatrix(ko,Ye.workingColorSpace,s);const e=`mat3( ${ko.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(s)){case Zs:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function zo(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+Tp(s.getShaderSource(e),r)}else return i}function Ap(s,e){const t=wp(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Cp(s,e){let t;switch(e){case wc:t="Linear";break;case Ac:t="Reinhard";break;case Cc:t="Cineon";break;case ml:t="ACESFilmic";break;case Pc:t="AgX";break;case Lc:t="Neutral";break;case Rc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cs=new R;function Rp(){Ye.getLuminanceCoefficients(Cs);const s=Cs.x.toFixed(4),e=Cs.y.toFixed(4),t=Cs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($i).join(`
`)}function Lp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(e,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:s.getAttribLocation(e,r),locationSize:o}}return t}function $i(s){return s!==""}function Vo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Go(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ip=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tr(s){return s.replace(Ip,Np)}const Up=new Map;function Np(s,e){let t=Ve[e];if(t===void 0){const n=Up.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tr(t)}const Fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ho(s){return s.replace(Fp,Op)}function Op(s,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Wo(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function Bp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ul?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===fl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fn&&(e="SHADOWMAP_TYPE_VSM"),e}function kp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ai:case Ci:e="ENVMAP_TYPE_CUBE";break;case Ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ci:e="ENVMAP_MODE_REFRACTION";break}return e}function Vp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case pl:e="ENVMAP_BLENDING_MULTIPLY";break;case Ec:e="ENVMAP_BLENDING_MIX";break;case Tc:e="ENVMAP_BLENDING_ADD";break}return e}function Gp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Hp(s,e,t,n){const i=s.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=Bp(t),c=kp(t),h=zp(t),d=Vp(t),u=Gp(t),p=Pp(t),g=Lp(a),v=i.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($i).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($i).join(`
`),f.length>0&&(f+=`
`)):(m=[Wo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($i).join(`
`),f=[Wo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Dn?Cp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Ap("linearToOutputTexel",t.outputColorSpace),Rp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($i).join(`
`)),r=Tr(r),r=Vo(r,t),r=Go(r,t),o=Tr(o),o=Vo(o,t),o=Go(o,t),r=Ho(r),o=Ho(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===to?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===to?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=T+m+r,y=T+f+o,N=Bo(i,i.VERTEX_SHADER,E),A=Bo(i,i.FRAGMENT_SHADER,y);i.attachShader(v,N),i.attachShader(v,A),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function w(C){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(v).trim(),F=i.getShaderInfoLog(N).trim(),W=i.getShaderInfoLog(A).trim();let $=!0,X=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,N,A);else{const Q=zo(i,N,"vertex"),G=zo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+Q+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||W==="")&&(X=!1);X&&(C.diagnostics={runnable:$,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:f}})}i.deleteShader(N),i.deleteShader(A),P=new Gs(i,v),S=Dp(i,v)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(v,bp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ep++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=A,this}let Wp=0;class Xp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qp(e),t.set(e,n)),n}}class qp{constructor(e){this.id=Wp++,this.code=e,this.usedTimes=0}}function $p(s,e,t,n,i,a,r){const o=new Dl,l=new Xp,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,C,k,F){const W=k.fog,$=F.geometry,X=S.isMeshStandardMaterial?k.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),G=Q&&Q.mapping===Ks?Q.image.height:null,re=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const fe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,q=fe!==void 0?fe.length:0;let ie=0;$.morphAttributes.position!==void 0&&(ie=1),$.morphAttributes.normal!==void 0&&(ie=2),$.morphAttributes.color!==void 0&&(ie=3);let he,V,j,se;if(re){const Je=nn[re];he=Je.vertexShader,V=Je.fragmentShader}else he=S.vertexShader,V=S.fragmentShader,l.update(S),j=l.getVertexShaderID(S),se=l.getFragmentShaderID(S);const ee=s.getRenderTarget(),me=s.state.buffers.depth.getReversed(),be=F.isInstancedMesh===!0,Ce=F.isBatchedMesh===!0,Xe=!!S.map,Ne=!!S.matcap,Qe=!!Q,L=!!S.aoMap,ht=!!S.lightMap,Fe=!!S.bumpMap,Le=!!S.normalMap,xe=!!S.displacementMap,We=!!S.emissiveMap,Ee=!!S.metalnessMap,b=!!S.roughnessMap,_=S.anisotropy>0,O=S.clearcoat>0,K=S.dispersion>0,J=S.iridescence>0,Y=S.sheen>0,Te=S.transmission>0,ce=_&&!!S.anisotropyMap,ge=O&&!!S.clearcoatMap,$e=O&&!!S.clearcoatNormalMap,te=O&&!!S.clearcoatRoughnessMap,ve=J&&!!S.iridescenceMap,Re=J&&!!S.iridescenceThicknessMap,De=Y&&!!S.sheenColorMap,_e=Y&&!!S.sheenRoughnessMap,qe=!!S.specularMap,ze=!!S.specularColorMap,st=!!S.specularIntensityMap,D=Te&&!!S.transmissionMap,le=Te&&!!S.thicknessMap,H=!!S.gradientMap,Z=!!S.alphaMap,pe=S.alphaTest>0,de=!!S.alphaHash,Oe=!!S.extensions;let dt=Dn;S.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(dt=s.toneMapping);const yt={shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:he,fragmentShader:V,defines:S.defines,customVertexShaderID:j,customFragmentShaderID:se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ce,batchingColor:Ce&&F._colorsTexture!==null,instancing:be,instancingColor:be&&F.instanceColor!==null,instancingMorph:be&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ii,alphaToCoverage:!!S.alphaToCoverage,map:Xe,matcap:Ne,envMap:Qe,envMapMode:Qe&&Q.mapping,envMapCubeUVHeight:G,aoMap:L,lightMap:ht,bumpMap:Fe,normalMap:Le,displacementMap:u&&xe,emissiveMap:We,normalMapObjectSpace:Le&&S.normalMapType===Nc,normalMapTangentSpace:Le&&S.normalMapType===Al,metalnessMap:Ee,roughnessMap:b,anisotropy:_,anisotropyMap:ce,clearcoat:O,clearcoatMap:ge,clearcoatNormalMap:$e,clearcoatRoughnessMap:te,dispersion:K,iridescence:J,iridescenceMap:ve,iridescenceThicknessMap:Re,sheen:Y,sheenColorMap:De,sheenRoughnessMap:_e,specularMap:qe,specularColorMap:ze,specularIntensityMap:st,transmission:Te,transmissionMap:D,thicknessMap:le,gradientMap:H,opaque:S.transparent===!1&&S.blending===jn&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:pe,alphaHash:de,combine:S.combine,mapUv:Xe&&v(S.map.channel),aoMapUv:L&&v(S.aoMap.channel),lightMapUv:ht&&v(S.lightMap.channel),bumpMapUv:Fe&&v(S.bumpMap.channel),normalMapUv:Le&&v(S.normalMap.channel),displacementMapUv:xe&&v(S.displacementMap.channel),emissiveMapUv:We&&v(S.emissiveMap.channel),metalnessMapUv:Ee&&v(S.metalnessMap.channel),roughnessMapUv:b&&v(S.roughnessMap.channel),anisotropyMapUv:ce&&v(S.anisotropyMap.channel),clearcoatMapUv:ge&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:$e&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(S.sheenRoughnessMap.channel),specularMapUv:qe&&v(S.specularMap.channel),specularColorMapUv:ze&&v(S.specularColorMap.channel),specularIntensityMapUv:st&&v(S.specularIntensityMap.channel),transmissionMapUv:D&&v(S.transmissionMap.channel),thicknessMapUv:le&&v(S.thicknessMap.channel),alphaMapUv:Z&&v(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Le||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!$.attributes.uv&&(Xe||Z),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:me,skinning:F.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ie,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:dt,decodeVideoTexture:Xe&&S.map.isVideoTexture===!0&&Ye.getTransfer(S.map.colorSpace)===tt,decodeVideoTextureEmissive:We&&S.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(S.emissiveMap.colorSpace)===tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xt,flipSided:S.side===Et,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Oe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&S.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function f(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)x.push(C),x.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(T(x,S),E(x,S),x.push(s.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function T(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function E(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const x=g[S.type];let C;if(x){const k=nn[x];C=es.clone(k.uniforms)}else C=S.uniforms;return C}function N(S,x){let C;for(let k=0,F=h.length;k<F;k++){const W=h[k];if(W.cacheKey===x){C=W,++C.usedTimes;break}}return C===void 0&&(C=new Hp(s,x,S,a),h.push(C)),C}function A(S){if(--S.usedTimes===0){const x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function w(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:N,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:P}}function Yp(){let s=new WeakMap;function e(r){return s.has(r)}function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:a}}function jp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Xo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qo(){const s=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function r(d,u,p,g,v,m){let f=s[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},s[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function o(d,u,p,g,v,m){const f=r(d,u,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(d,u,p,g,v,m){const f=r(d,u,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||jp),n.length>1&&n.sort(u||Xo),i.length>1&&i.sort(u||Xo)}function h(){for(let d=e,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:o,unshift:l,finish:h,sort:c}}function Kp(){let s=new WeakMap;function e(n,i){const a=s.get(n);let r;return a===void 0?(r=new qo,s.set(n,[r])):i>=a.length?(r=new qo,a.push(r)):r=a[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function Zp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ue};break;case"SpotLight":t={position:new R,direction:new R,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function Qp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Jp=0;function em(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function tm(s){const e=new Zp,t=Qp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,a=new rt,r=new rt;function o(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,T=0,E=0,y=0,N=0,A=0,w=0;c.sort(em);for(let S=0,x=c.length;S<x;S++){const C=c[S],k=C.color,F=C.intensity,W=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=k.r*F,d+=k.g*F,u+=k.b*F;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],F);w++}else if(C.isDirectionalLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,G=t.get(C);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=C.shadow.matrix,T++}n.directional[p]=X,p++}else if(C.isSpotLight){const X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(k).multiplyScalar(F),X.distance=W,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[v]=X;const Q=C.shadow;if(C.map&&(n.spotLightMap[N]=C.map,N++,Q.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[v]=Q.matrix,C.castShadow){const G=t.get(C);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=$,y++}v++}else if(C.isRectAreaLight){const X=e.get(C);X.color.copy(k).multiplyScalar(F),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=X,m++}else if(C.isPointLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const Q=C.shadow,G=t.get(C);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=C.shadow.matrix,E++}n.point[g]=X,g++}else if(C.isHemisphereLight){const X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(F),X.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[f]=X,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==T||P.numPointShadows!==E||P.numSpotShadows!==y||P.numSpotMaps!==N||P.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+N-A,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=T,P.numPointShadows=E,P.numSpotShadows=y,P.numSpotMaps=N,P.numLightProbes=w,n.version=Jp++)}function l(c,h){let d=0,u=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const E=c[f];if(E.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(E.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(E.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(E.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),u++}else if(E.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function $o(s){const e=new tm(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function r(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function nm(s){let e=new WeakMap;function t(i,a=0){const r=e.get(i);let o;return r===void 0?(o=new $o(s),e.set(i,[o])):a>=r.length?(o=new $o(s),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class im extends Nn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sm extends Nn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rm=`uniform sampler2D shadow_pass;
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
}`;function om(s,e,t){let n=new Or;const i=new Ae,a=new Ae,r=new nt,o=new im({depthPacking:Uc}),l=new sm,c={},h=t.maxTextureSize,d={[Un]:Et,[Et]:Un,[Xt]:Xt},u=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:am,fragmentShader:rm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new xt;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new He(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ul;let f=this.type;this.render=function(A,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=s.getRenderTarget(),x=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),k=s.state;k.setBlending(vn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=f!==fn&&this.type===fn,W=f===fn&&this.type!==fn;for(let $=0,X=A.length;$<X;$++){const Q=A[$],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const re=G.getFrameExtents();if(i.multiply(re),a.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/re.x),i.x=a.x*re.x,G.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/re.y),i.y=a.y*re.y,G.mapSize.y=a.y)),G.map===null||F===!0||W===!0){const q=this.type!==fn?{minFilter:en,magFilter:en}:{};G.map!==null&&G.map.dispose(),G.map=new Lt(i.x,i.y,q),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const fe=G.getViewportCount();for(let q=0;q<fe;q++){const ie=G.getViewport(q);r.set(a.x*ie.x,a.y*ie.y,a.x*ie.z,a.y*ie.w),k.viewport(r),G.updateMatrices(Q,q),n=G.getFrustum(),y(w,P,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===fn&&T(G,P),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(S,x,C)};function T(A,w){const P=e.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Lt(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(w,null,P,u,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(w,null,P,p,v,null)}function E(A,w,P,S){let x=null;const C=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)x=C;else if(x=P.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const k=x.uuid,F=w.uuid;let W=c[k];W===void 0&&(W={},c[k]=W);let $=W[F];$===void 0&&($=x.clone(),W[F]=$,w.addEventListener("dispose",N)),x=$}if(x.visible=w.visible,x.wireframe=w.wireframe,S===fn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:d[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=s.properties.get(x);k.light=P}return x}function y(A,w,P,S,x){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===fn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const F=e.update(A),W=A.material;if(Array.isArray(W)){const $=F.groups;for(let X=0,Q=$.length;X<Q;X++){const G=$[X],re=W[G.materialIndex];if(re&&re.visible){const fe=E(A,re,S,x);A.onBeforeShadow(s,A,w,P,F,fe,G),s.renderBufferDirect(P,null,F,fe,A,G),A.onAfterShadow(s,A,w,P,F,fe,G)}}}else if(W.visible){const $=E(A,W,S,x);A.onBeforeShadow(s,A,w,P,F,$,null),s.renderBufferDirect(P,null,F,$,A,null),A.onAfterShadow(s,A,w,P,F,$,null)}}const k=A.children;for(let F=0,W=k.length;F<W;F++)y(k[F],w,P,S,x)}function N(A){A.target.removeEventListener("dispose",N);for(const P in c){const S=c[P],x=A.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const lm={[Ga]:Ha,[Wa]:$a,[Xa]:Ya,[wi]:qa,[Ha]:Ga,[$a]:Wa,[Ya]:Xa,[qa]:wi};function cm(s,e){function t(){let D=!1;const le=new nt;let H=null;const Z=new nt(0,0,0,0);return{setMask:function(pe){H!==pe&&!D&&(s.colorMask(pe,pe,pe,pe),H=pe)},setLocked:function(pe){D=pe},setClear:function(pe,de,Oe,dt,yt){yt===!0&&(pe*=dt,de*=dt,Oe*=dt),le.set(pe,de,Oe,dt),Z.equals(le)===!1&&(s.clearColor(pe,de,Oe,dt),Z.copy(le))},reset:function(){D=!1,H=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,H=null,Z=null,pe=null;return{setReversed:function(de){if(le!==de){const Oe=e.get("EXT_clip_control");le?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const dt=pe;pe=null,this.setClear(dt)}le=de},getReversed:function(){return le},setTest:function(de){de?ee(s.DEPTH_TEST):me(s.DEPTH_TEST)},setMask:function(de){H!==de&&!D&&(s.depthMask(de),H=de)},setFunc:function(de){if(le&&(de=lm[de]),Z!==de){switch(de){case Ga:s.depthFunc(s.NEVER);break;case Ha:s.depthFunc(s.ALWAYS);break;case Wa:s.depthFunc(s.LESS);break;case wi:s.depthFunc(s.LEQUAL);break;case Xa:s.depthFunc(s.EQUAL);break;case qa:s.depthFunc(s.GEQUAL);break;case $a:s.depthFunc(s.GREATER);break;case Ya:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=de}},setLocked:function(de){D=de},setClear:function(de){pe!==de&&(le&&(de=1-de),s.clearDepth(de),pe=de)},reset:function(){D=!1,H=null,Z=null,pe=null,le=!1}}}function i(){let D=!1,le=null,H=null,Z=null,pe=null,de=null,Oe=null,dt=null,yt=null;return{setTest:function(Je){D||(Je?ee(s.STENCIL_TEST):me(s.STENCIL_TEST))},setMask:function(Je){le!==Je&&!D&&(s.stencilMask(Je),le=Je)},setFunc:function(Je,Yt,rn){(H!==Je||Z!==Yt||pe!==rn)&&(s.stencilFunc(Je,Yt,rn),H=Je,Z=Yt,pe=rn)},setOp:function(Je,Yt,rn){(de!==Je||Oe!==Yt||dt!==rn)&&(s.stencilOp(Je,Yt,rn),de=Je,Oe=Yt,dt=rn)},setLocked:function(Je){D=Je},setClear:function(Je){yt!==Je&&(s.clearStencil(Je),yt=Je)},reset:function(){D=!1,le=null,H=null,Z=null,pe=null,de=null,Oe=null,dt=null,yt=null}}}const a=new t,r=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,E=null,y=null,N=null,A=null,w=new Ue(0,0,0),P=0,S=!1,x=null,C=null,k=null,F=null,W=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=Q>=2);let re=null,fe={};const q=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),he=new nt().fromArray(q),V=new nt().fromArray(ie);function j(D,le,H,Z){const pe=new Uint8Array(4),de=s.createTexture();s.bindTexture(D,de),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<H;Oe++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,pe):s.texImage2D(le+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pe);return de}const se={};se[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),se[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),se[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ee(s.DEPTH_TEST),r.setFunc(wi),Fe(!1),Le(Zr),ee(s.CULL_FACE),L(vn);function ee(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function me(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function be(D,le){return d[D]!==le?(s.bindFramebuffer(D,le),d[D]=le,D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=le),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=le),!0):!1}function Ce(D,le){let H=p,Z=!1;if(D){H=u.get(le),H===void 0&&(H=[],u.set(le,H));const pe=D.textures;if(H.length!==pe.length||H[0]!==s.COLOR_ATTACHMENT0){for(let de=0,Oe=pe.length;de<Oe;de++)H[de]=s.COLOR_ATTACHMENT0+de;H.length=pe.length,Z=!0}}else H[0]!==s.BACK&&(H[0]=s.BACK,Z=!0);Z&&s.drawBuffers(H)}function Xe(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Ne={[qn]:s.FUNC_ADD,[oc]:s.FUNC_SUBTRACT,[lc]:s.FUNC_REVERSE_SUBTRACT};Ne[cc]=s.MIN,Ne[hc]=s.MAX;const Qe={[dc]:s.ZERO,[uc]:s.ONE,[fc]:s.SRC_COLOR,[za]:s.SRC_ALPHA,[xc]:s.SRC_ALPHA_SATURATE,[vc]:s.DST_COLOR,[mc]:s.DST_ALPHA,[pc]:s.ONE_MINUS_SRC_COLOR,[Va]:s.ONE_MINUS_SRC_ALPHA,[_c]:s.ONE_MINUS_DST_COLOR,[gc]:s.ONE_MINUS_DST_ALPHA,[Mc]:s.CONSTANT_COLOR,[yc]:s.ONE_MINUS_CONSTANT_COLOR,[Sc]:s.CONSTANT_ALPHA,[bc]:s.ONE_MINUS_CONSTANT_ALPHA};function L(D,le,H,Z,pe,de,Oe,dt,yt,Je){if(D===vn){v===!0&&(me(s.BLEND),v=!1);return}if(v===!1&&(ee(s.BLEND),v=!0),D!==rc){if(D!==m||Je!==S){if((f!==qn||y!==qn)&&(s.blendEquation(s.FUNC_ADD),f=qn,y=qn),Je)switch(D){case jn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ti:s.blendFunc(s.ONE,s.ONE);break;case Qr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case jn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ti:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Qr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,E=null,N=null,A=null,w.set(0,0,0),P=0,m=D,S=Je}return}pe=pe||le,de=de||H,Oe=Oe||Z,(le!==f||pe!==y)&&(s.blendEquationSeparate(Ne[le],Ne[pe]),f=le,y=pe),(H!==T||Z!==E||de!==N||Oe!==A)&&(s.blendFuncSeparate(Qe[H],Qe[Z],Qe[de],Qe[Oe]),T=H,E=Z,N=de,A=Oe),(dt.equals(w)===!1||yt!==P)&&(s.blendColor(dt.r,dt.g,dt.b,yt),w.copy(dt),P=yt),m=D,S=!1}function ht(D,le){D.side===Xt?me(s.CULL_FACE):ee(s.CULL_FACE);let H=D.side===Et;le&&(H=!H),Fe(H),D.blending===jn&&D.transparent===!1?L(vn):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),a.setMask(D.colorWrite);const Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),We(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(D){x!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),x=D)}function Le(D){D!==sc?(ee(s.CULL_FACE),D!==C&&(D===Zr?s.cullFace(s.BACK):D===ac?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):me(s.CULL_FACE),C=D}function xe(D){D!==k&&(X&&s.lineWidth(D),k=D)}function We(D,le,H){D?(ee(s.POLYGON_OFFSET_FILL),(F!==le||W!==H)&&(s.polygonOffset(le,H),F=le,W=H)):me(s.POLYGON_OFFSET_FILL)}function Ee(D){D?ee(s.SCISSOR_TEST):me(s.SCISSOR_TEST)}function b(D){D===void 0&&(D=s.TEXTURE0+$-1),re!==D&&(s.activeTexture(D),re=D)}function _(D,le,H){H===void 0&&(re===null?H=s.TEXTURE0+$-1:H=re);let Z=fe[H];Z===void 0&&(Z={type:void 0,texture:void 0},fe[H]=Z),(Z.type!==D||Z.texture!==le)&&(re!==H&&(s.activeTexture(H),re=H),s.bindTexture(D,le||se[D]),Z.type=D,Z.texture=le)}function O(){const D=fe[re];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $e(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){he.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),he.copy(D))}function _e(D){V.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),V.copy(D))}function qe(D,le){let H=c.get(le);H===void 0&&(H=new WeakMap,c.set(le,H));let Z=H.get(D);Z===void 0&&(Z=s.getUniformBlockIndex(le,D.name),H.set(D,Z))}function ze(D,le){const Z=c.get(le).get(D);l.get(le)!==Z&&(s.uniformBlockBinding(le,Z,D.__bindingPointIndex),l.set(le,Z))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},re=null,fe={},d={},u=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,E=null,y=null,N=null,A=null,w=new Ue(0,0,0),P=0,S=!1,x=null,C=null,k=null,F=null,W=null,he.set(0,0,s.canvas.width,s.canvas.height),V.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:ee,disable:me,bindFramebuffer:be,drawBuffers:Ce,useProgram:Xe,setBlending:L,setMaterial:ht,setFlipSided:Fe,setCullFace:Le,setLineWidth:xe,setPolygonOffset:We,setScissorTest:Ee,activeTexture:b,bindTexture:_,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:ve,texImage3D:Re,updateUBOMapping:qe,uniformBlockBinding:ze,texStorage2D:$e,texStorage3D:te,texSubImage2D:Y,texSubImage3D:Te,compressedTexSubImage2D:ce,compressedTexSubImage3D:ge,scissor:De,viewport:_e,reset:st}}function Yo(s,e,t,n){const i=hm(n);switch(t){case Ml:return s*e;case Sl:return s*e;case bl:return s*e*2;case El:return s*e/i.components*i.byteLength;case Dr:return s*e/i.components*i.byteLength;case Tl:return s*e*2/i.components*i.byteLength;case Ir:return s*e*2/i.components*i.byteLength;case yl:return s*e*3/i.components*i.byteLength;case $t:return s*e*4/i.components*i.byteLength;case Ur:return s*e*4/i.components*i.byteLength;case Os:case Bs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ks:case zs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ja:case tr:return Math.max(s,16)*Math.max(e,8)/4;case Qa:case er:return Math.max(s,8)*Math.max(e,8)/2;case nr:case ir:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ar:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rr:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case or:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case lr:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case cr:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case hr:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case dr:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ur:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case fr:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case pr:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case mr:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case gr:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case vr:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case _r:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Vs:case xr:case Mr:return Math.ceil(s/4)*Math.ceil(e/4)*16;case wl:case yr:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Sr:case br:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hm(s){switch(s){case yn:case vl:return{byteLength:1,components:1};case Qi:case _l:case an:return{byteLength:2,components:1};case Pr:case Lr:return{byteLength:2,components:4};case Zn:case Rr:case mn:return{byteLength:4,components:1};case xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function dm(s,e,t,n,i,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return p?new OffscreenCanvas(b,_):Ws("canvas")}function v(b,_,O){let K=1;const J=Ee(b);if((J.width>O||J.height>O)&&(K=O/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(K*J.width),Te=Math.floor(K*J.height);d===void 0&&(d=g(Y,Te));const ce=_?g(Y,Te):d;return ce.width=Y,ce.height=Te,ce.getContext("2d").drawImage(b,0,0,Y,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+Te+")."),ce}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){s.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(b,_,O,K,J=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=_;if(_===s.RED&&(O===s.FLOAT&&(Y=s.R32F),O===s.HALF_FLOAT&&(Y=s.R16F),O===s.UNSIGNED_BYTE&&(Y=s.R8)),_===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.R8UI),O===s.UNSIGNED_SHORT&&(Y=s.R16UI),O===s.UNSIGNED_INT&&(Y=s.R32UI),O===s.BYTE&&(Y=s.R8I),O===s.SHORT&&(Y=s.R16I),O===s.INT&&(Y=s.R32I)),_===s.RG&&(O===s.FLOAT&&(Y=s.RG32F),O===s.HALF_FLOAT&&(Y=s.RG16F),O===s.UNSIGNED_BYTE&&(Y=s.RG8)),_===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RG8UI),O===s.UNSIGNED_SHORT&&(Y=s.RG16UI),O===s.UNSIGNED_INT&&(Y=s.RG32UI),O===s.BYTE&&(Y=s.RG8I),O===s.SHORT&&(Y=s.RG16I),O===s.INT&&(Y=s.RG32I)),_===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),O===s.UNSIGNED_INT&&(Y=s.RGB32UI),O===s.BYTE&&(Y=s.RGB8I),O===s.SHORT&&(Y=s.RGB16I),O===s.INT&&(Y=s.RGB32I)),_===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),O===s.UNSIGNED_INT&&(Y=s.RGBA32UI),O===s.BYTE&&(Y=s.RGBA8I),O===s.SHORT&&(Y=s.RGBA16I),O===s.INT&&(Y=s.RGBA32I)),_===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),_===s.RGBA){const Te=J?Zs:Ye.getTransfer(K);O===s.FLOAT&&(Y=s.RGBA32F),O===s.HALF_FLOAT&&(Y=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Y=Te===tt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(b,_){let O;return b?_===null||_===Zn||_===Ri?O=s.DEPTH24_STENCIL8:_===mn?O=s.DEPTH32F_STENCIL8:_===Qi&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Zn||_===Ri?O=s.DEPTH_COMPONENT24:_===mn?O=s.DEPTH_COMPONENT32F:_===Qi&&(O=s.DEPTH_COMPONENT16),O}function N(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==en&&b.minFilter!==kt?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function A(b){const _=b.target;_.removeEventListener("dispose",A),P(_),_.isVideoTexture&&h.delete(_)}function w(b){const _=b.target;_.removeEventListener("dispose",w),x(_)}function P(b){const _=n.get(b);if(_.__webglInit===void 0)return;const O=b.source,K=u.get(O);if(K){const J=K[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(b),Object.keys(K).length===0&&u.delete(O)}n.remove(b)}function S(b){const _=n.get(b);s.deleteTexture(_.__webglTexture);const O=b.source,K=u.get(O);delete K[_.__cacheKey],r.memory.textures--}function x(b){const _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let J=0;J<_.__webglFramebuffer[K].length;J++)s.deleteFramebuffer(_.__webglFramebuffer[K][J]);else s.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)s.deleteFramebuffer(_.__webglFramebuffer[K]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=b.textures;for(let K=0,J=O.length;K<J;K++){const Y=n.get(O[K]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),r.memory.textures--),n.remove(O[K])}n.remove(b)}let C=0;function k(){C=0}function F(){const b=C;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),C+=1,b}function W(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function $(b,_){const O=n.get(b);if(b.isVideoTexture&&xe(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(O,b,_);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+_)}function X(b,_){const O=n.get(b);if(b.version>0&&O.__version!==b.version){V(O,b,_);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+_)}function Q(b,_){const O=n.get(b);if(b.version>0&&O.__version!==b.version){V(O,b,_);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+_)}function G(b,_){const O=n.get(b);if(b.version>0&&O.__version!==b.version){j(O,b,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+_)}const re={[Zi]:s.REPEAT,[Yn]:s.CLAMP_TO_EDGE,[Za]:s.MIRRORED_REPEAT},fe={[en]:s.NEAREST,[Dc]:s.NEAREST_MIPMAP_NEAREST,[ls]:s.NEAREST_MIPMAP_LINEAR,[kt]:s.LINEAR,[aa]:s.LINEAR_MIPMAP_NEAREST,[Ln]:s.LINEAR_MIPMAP_LINEAR},q={[Fc]:s.NEVER,[Gc]:s.ALWAYS,[Oc]:s.LESS,[Cl]:s.LEQUAL,[Bc]:s.EQUAL,[Vc]:s.GEQUAL,[kc]:s.GREATER,[zc]:s.NOTEQUAL};function ie(b,_){if(_.type===mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===kt||_.magFilter===aa||_.magFilter===ls||_.magFilter===Ln||_.minFilter===kt||_.minFilter===aa||_.minFilter===ls||_.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,re[_.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,re[_.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,re[_.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,fe[_.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,fe[_.minFilter]),_.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,q[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===en||_.minFilter!==ls&&_.minFilter!==Ln||_.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function he(b,_){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",A));const K=_.source;let J=u.get(K);J===void 0&&(J={},u.set(K,J));const Y=W(_);if(Y!==b.__cacheKey){J[Y]===void 0&&(J[Y]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,O=!0),J[Y].usedTimes++;const Te=J[b.__cacheKey];Te!==void 0&&(J[b.__cacheKey].usedTimes--,Te.usedTimes===0&&S(_)),b.__cacheKey=Y,b.__webglTexture=J[Y].texture}return O}function V(b,_,O){let K=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=s.TEXTURE_3D);const J=he(b,_),Y=_.source;t.bindTexture(K,b.__webglTexture,s.TEXTURE0+O);const Te=n.get(Y);if(Y.version!==Te.__version||J===!0){t.activeTexture(s.TEXTURE0+O);const ce=Ye.getPrimaries(Ye.workingColorSpace),ge=_.colorSpace===Pn?null:Ye.getPrimaries(_.colorSpace),$e=_.colorSpace===Pn||ce===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let te=v(_.image,!1,i.maxTextureSize);te=We(_,te);const ve=a.convert(_.format,_.colorSpace),Re=a.convert(_.type);let De=E(_.internalFormat,ve,Re,_.colorSpace,_.isVideoTexture);ie(K,_);let _e;const qe=_.mipmaps,ze=_.isVideoTexture!==!0,st=Te.__version===void 0||J===!0,D=Y.dataReady,le=N(_,te);if(_.isDepthTexture)De=y(_.format===Pi,_.type),st&&(ze?t.texStorage2D(s.TEXTURE_2D,1,De,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,De,te.width,te.height,0,ve,Re,null));else if(_.isDataTexture)if(qe.length>0){ze&&st&&t.texStorage2D(s.TEXTURE_2D,le,De,qe[0].width,qe[0].height);for(let H=0,Z=qe.length;H<Z;H++)_e=qe[H],ze?D&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,_e.width,_e.height,ve,Re,_e.data):t.texImage2D(s.TEXTURE_2D,H,De,_e.width,_e.height,0,ve,Re,_e.data);_.generateMipmaps=!1}else ze?(st&&t.texStorage2D(s.TEXTURE_2D,le,De,te.width,te.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,te.width,te.height,ve,Re,te.data)):t.texImage2D(s.TEXTURE_2D,0,De,te.width,te.height,0,ve,Re,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ze&&st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,De,qe[0].width,qe[0].height,te.depth);for(let H=0,Z=qe.length;H<Z;H++)if(_e=qe[H],_.format!==$t)if(ve!==null)if(ze){if(D)if(_.layerUpdates.size>0){const pe=Yo(_e.width,_e.height,_.format,_.type);for(const de of _.layerUpdates){const Oe=_e.data.subarray(de*pe/_e.data.BYTES_PER_ELEMENT,(de+1)*pe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,de,_e.width,_e.height,1,ve,Oe)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,_e.width,_e.height,te.depth,ve,_e.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,De,_e.width,_e.height,te.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,_e.width,_e.height,te.depth,ve,Re,_e.data):t.texImage3D(s.TEXTURE_2D_ARRAY,H,De,_e.width,_e.height,te.depth,0,ve,Re,_e.data)}else{ze&&st&&t.texStorage2D(s.TEXTURE_2D,le,De,qe[0].width,qe[0].height);for(let H=0,Z=qe.length;H<Z;H++)_e=qe[H],_.format!==$t?ve!==null?ze?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,_e.width,_e.height,ve,_e.data):t.compressedTexImage2D(s.TEXTURE_2D,H,De,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?D&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,_e.width,_e.height,ve,Re,_e.data):t.texImage2D(s.TEXTURE_2D,H,De,_e.width,_e.height,0,ve,Re,_e.data)}else if(_.isDataArrayTexture)if(ze){if(st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,De,te.width,te.height,te.depth),D)if(_.layerUpdates.size>0){const H=Yo(te.width,te.height,_.format,_.type);for(const Z of _.layerUpdates){const pe=te.data.subarray(Z*H/te.data.BYTES_PER_ELEMENT,(Z+1)*H/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,te.width,te.height,1,ve,Re,pe)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ve,Re,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,De,te.width,te.height,te.depth,0,ve,Re,te.data);else if(_.isData3DTexture)ze?(st&&t.texStorage3D(s.TEXTURE_3D,le,De,te.width,te.height,te.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ve,Re,te.data)):t.texImage3D(s.TEXTURE_3D,0,De,te.width,te.height,te.depth,0,ve,Re,te.data);else if(_.isFramebufferTexture){if(st)if(ze)t.texStorage2D(s.TEXTURE_2D,le,De,te.width,te.height);else{let H=te.width,Z=te.height;for(let pe=0;pe<le;pe++)t.texImage2D(s.TEXTURE_2D,pe,De,H,Z,0,ve,Re,null),H>>=1,Z>>=1}}else if(qe.length>0){if(ze&&st){const H=Ee(qe[0]);t.texStorage2D(s.TEXTURE_2D,le,De,H.width,H.height)}for(let H=0,Z=qe.length;H<Z;H++)_e=qe[H],ze?D&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,ve,Re,_e):t.texImage2D(s.TEXTURE_2D,H,De,ve,Re,_e);_.generateMipmaps=!1}else if(ze){if(st){const H=Ee(te);t.texStorage2D(s.TEXTURE_2D,le,De,H.width,H.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve,Re,te)}else t.texImage2D(s.TEXTURE_2D,0,De,ve,Re,te);m(_)&&f(K),Te.__version=Y.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function j(b,_,O){if(_.image.length!==6)return;const K=he(b,_),J=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+O);const Y=n.get(J);if(J.version!==Y.__version||K===!0){t.activeTexture(s.TEXTURE0+O);const Te=Ye.getPrimaries(Ye.workingColorSpace),ce=_.colorSpace===Pn?null:Ye.getPrimaries(_.colorSpace),ge=_.colorSpace===Pn||Te===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const $e=_.isCompressedTexture||_.image[0].isCompressedTexture,te=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let Z=0;Z<6;Z++)!$e&&!te?ve[Z]=v(_.image[Z],!0,i.maxCubemapSize):ve[Z]=te?_.image[Z].image:_.image[Z],ve[Z]=We(_,ve[Z]);const Re=ve[0],De=a.convert(_.format,_.colorSpace),_e=a.convert(_.type),qe=E(_.internalFormat,De,_e,_.colorSpace),ze=_.isVideoTexture!==!0,st=Y.__version===void 0||K===!0,D=J.dataReady;let le=N(_,Re);ie(s.TEXTURE_CUBE_MAP,_);let H;if($e){ze&&st&&t.texStorage2D(s.TEXTURE_CUBE_MAP,le,qe,Re.width,Re.height);for(let Z=0;Z<6;Z++){H=ve[Z].mipmaps;for(let pe=0;pe<H.length;pe++){const de=H[pe];_.format!==$t?De!==null?ze?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,0,0,de.width,de.height,De,de.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,qe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,0,0,de.width,de.height,De,_e,de.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,qe,de.width,de.height,0,De,_e,de.data)}}}else{if(H=_.mipmaps,ze&&st){H.length>0&&le++;const Z=Ee(ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,le,qe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(te){ze?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ve[Z].width,ve[Z].height,De,_e,ve[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qe,ve[Z].width,ve[Z].height,0,De,_e,ve[Z].data);for(let pe=0;pe<H.length;pe++){const Oe=H[pe].image[Z].image;ze?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,0,0,Oe.width,Oe.height,De,_e,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,qe,Oe.width,Oe.height,0,De,_e,Oe.data)}}else{ze?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,De,_e,ve[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qe,De,_e,ve[Z]);for(let pe=0;pe<H.length;pe++){const de=H[pe];ze?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,0,0,De,_e,de.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,qe,De,_e,de.image[Z])}}}m(_)&&f(s.TEXTURE_CUBE_MAP),Y.__version=J.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function se(b,_,O,K,J,Y){const Te=a.convert(O.format,O.colorSpace),ce=a.convert(O.type),ge=E(O.internalFormat,Te,ce,O.colorSpace),$e=n.get(_),te=n.get(O);if(te.__renderTarget=_,!$e.__hasExternalTextures){const ve=Math.max(1,_.width>>Y),Re=Math.max(1,_.height>>Y);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,Y,ge,ve,Re,_.depth,0,Te,ce,null):t.texImage2D(J,Y,ge,ve,Re,0,Te,ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),Le(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,J,te.__webglTexture,0,Fe(_)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,J,te.__webglTexture,Y),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(b,_,O){if(s.bindRenderbuffer(s.RENDERBUFFER,b),_.depthBuffer){const K=_.depthTexture,J=K&&K.isDepthTexture?K.type:null,Y=y(_.stencilBuffer,J),Te=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=Fe(_);Le(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,Y,_.width,_.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,Y,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,Y,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,b)}else{const K=_.textures;for(let J=0;J<K.length;J++){const Y=K[J],Te=a.convert(Y.format,Y.colorSpace),ce=a.convert(Y.type),ge=E(Y.internalFormat,Te,ce,Y.colorSpace),$e=Fe(_);O&&Le(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,ge,_.width,_.height):Le(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,ge,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,ge,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function me(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(_.depthTexture);K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$(_.depthTexture,0);const J=K.__webglTexture,Y=Fe(_);if(_.depthTexture.format===Si)Le(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(_.depthTexture.format===Pi)Le(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function be(b){const _=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=K}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");me(_.__webglFramebuffer,b)}else if(O){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=s.createRenderbuffer(),ee(_.__webglDepthbuffer[K],b,!1);else{const J=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),ee(_.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,J)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(b,_,O){const K=n.get(b);_!==void 0&&se(K.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&be(b)}function Xe(b){const _=b.texture,O=n.get(b),K=n.get(_);b.addEventListener("dispose",w);const J=b.textures,Y=b.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=_.version,r.memory.textures++),Y){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let ge=0;ge<_.mipmaps.length;ge++)O.__webglFramebuffer[ce][ge]=s.createFramebuffer()}else O.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<_.mipmaps.length;ce++)O.__webglFramebuffer[ce]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Te)for(let ce=0,ge=J.length;ce<ge;ce++){const $e=n.get(J[ce]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),r.memory.textures++)}if(b.samples>0&&Le(b)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ce=0;ce<J.length;ce++){const ge=J[ce];O.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ce]);const $e=a.convert(ge.format,ge.colorSpace),te=a.convert(ge.type),ve=E(ge.internalFormat,$e,te,ge.colorSpace,b.isXRRenderTarget===!0),Re=Fe(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,ve,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,O.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),ee(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),ie(s.TEXTURE_CUBE_MAP,_);for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0)for(let ge=0;ge<_.mipmaps.length;ge++)se(O.__webglFramebuffer[ce][ge],b,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else se(O.__webglFramebuffer[ce],b,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(_)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ce=0,ge=J.length;ce<ge;ce++){const $e=J[ce],te=n.get($e);t.bindTexture(s.TEXTURE_2D,te.__webglTexture),ie(s.TEXTURE_2D,$e),se(O.__webglFramebuffer,b,$e,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,0),m($e)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ce=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,K.__webglTexture),ie(ce,_),_.mipmaps&&_.mipmaps.length>0)for(let ge=0;ge<_.mipmaps.length;ge++)se(O.__webglFramebuffer[ge],b,_,s.COLOR_ATTACHMENT0,ce,ge);else se(O.__webglFramebuffer,b,_,s.COLOR_ATTACHMENT0,ce,0);m(_)&&f(ce),t.unbindTexture()}b.depthBuffer&&be(b)}function Ne(b){const _=b.textures;for(let O=0,K=_.length;O<K;O++){const J=_[O];if(m(J)){const Y=T(b),Te=n.get(J).__webglTexture;t.bindTexture(Y,Te),f(Y),t.unbindTexture()}}}const Qe=[],L=[];function ht(b){if(b.samples>0){if(Le(b)===!1){const _=b.textures,O=b.width,K=b.height;let J=s.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=n.get(b),ce=_.length>1;if(ce)for(let ge=0;ge<_.length;ge++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ge=0;ge<_.length;ge++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[ge]);const $e=n.get(_[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$e,0)}s.blitFramebuffer(0,0,O,K,0,0,O,K,J,s.NEAREST),l===!0&&(Qe.length=0,L.length=0,Qe.push(s.COLOR_ATTACHMENT0+ge),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Qe.push(Y),L.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ce)for(let ge=0;ge<_.length;ge++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,Te.__webglColorRenderbuffer[ge]);const $e=n.get(_[ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,$e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function Fe(b){return Math.min(i.maxSamples,b.samples)}function Le(b){const _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function xe(b){const _=r.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function We(b,_){const O=b.colorSpace,K=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Ii&&O!==Pn&&(Ye.getTransfer(O)===tt?(K!==$t||J!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function Ee(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=G,this.rebindTextures=Ce,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Le}function um(s,e){function t(n,i=Pn){let a;const r=Ye.getTransfer(i);if(n===yn)return s.UNSIGNED_BYTE;if(n===Pr)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Lr)return s.UNSIGNED_SHORT_5_5_5_1;if(n===xl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===vl)return s.BYTE;if(n===_l)return s.SHORT;if(n===Qi)return s.UNSIGNED_SHORT;if(n===Rr)return s.INT;if(n===Zn)return s.UNSIGNED_INT;if(n===mn)return s.FLOAT;if(n===an)return s.HALF_FLOAT;if(n===Ml)return s.ALPHA;if(n===yl)return s.RGB;if(n===$t)return s.RGBA;if(n===Sl)return s.LUMINANCE;if(n===bl)return s.LUMINANCE_ALPHA;if(n===Si)return s.DEPTH_COMPONENT;if(n===Pi)return s.DEPTH_STENCIL;if(n===El)return s.RED;if(n===Dr)return s.RED_INTEGER;if(n===Tl)return s.RG;if(n===Ir)return s.RG_INTEGER;if(n===Ur)return s.RGBA_INTEGER;if(n===Os||n===Bs||n===ks||n===zs)if(r===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Os)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Os)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ks)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qa||n===Ja||n===er||n===tr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Qa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ja)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===er)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nr||n===ir||n===sr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===nr||n===ir)return r===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===sr)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ar||n===rr||n===or||n===lr||n===cr||n===hr||n===dr||n===ur||n===fr||n===pr||n===mr||n===gr||n===vr||n===_r)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===ar)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rr)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===or)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lr)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cr)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hr)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dr)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ur)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fr)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pr)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mr)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gr)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vr)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_r)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vs||n===xr||n===Mr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Vs)return r===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wl||n===yr||n===Sr||n===br)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Vs)return a.COMPRESSED_RED_RGTC1_EXT;if(n===yr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===br)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class fm extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zt extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pm={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const mm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gm=`
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

}`;class vm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Rt,a=e.properties.get(i);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ft({vertexShader:mm,fragmentShader:gm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _m extends Qn{constructor(e,t){super();const n=this;let i=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const v=new vm,m=t.getContextAttributes();let f=null,T=null;const E=[],y=[],N=new Ae;let A=null;const w=new Bt;w.viewport=new nt;const P=new Bt;P.viewport=new nt;const S=[w,P],x=new fm;let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=E[V];return j===void 0&&(j=new Da,E[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=E[V];return j===void 0&&(j=new Da,E[V]=j),j.getGripSpace()},this.getHand=function(V){let j=E[V];return j===void 0&&(j=new Da,E[V]=j),j.getHandSpace()};function F(V){const j=y.indexOf(V.inputSource);if(j===-1)return;const se=E[j];se!==void 0&&(se.update(V.inputSource,V.frame,c||r),se.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",$);for(let V=0;V<E.length;V++){const j=y[V];j!==null&&(y[V]=null,E[V].disconnect(j))}C=null,k=null,v.reset(),e.setRenderTarget(f),p=null,u=null,d=null,i=null,T=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",W),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(N),i.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Lt(p.framebufferWidth,p.framebufferHeight,{format:$t,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,se=null,ee=null;m.depth&&(ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=m.stencil?Pi:Si,se=m.stencil?Ri:Zn);const me={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:a};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(me),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),T=new Lt(u.textureWidth,u.textureHeight,{format:$t,type:yn,depthTexture:new zl(u.textureWidth,u.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(V){for(let j=0;j<V.removed.length;j++){const se=V.removed[j],ee=y.indexOf(se);ee>=0&&(y[ee]=null,E[ee].disconnect(se))}for(let j=0;j<V.added.length;j++){const se=V.added[j];let ee=y.indexOf(se);if(ee===-1){for(let be=0;be<E.length;be++)if(be>=y.length){y.push(se),ee=be;break}else if(y[be]===null){y[be]=se,ee=be;break}if(ee===-1)break}const me=E[ee];me&&me.connect(se)}}const X=new R,Q=new R;function G(V,j,se){X.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(se.matrixWorld);const ee=X.distanceTo(Q),me=j.projectionMatrix.elements,be=se.projectionMatrix.elements,Ce=me[14]/(me[10]-1),Xe=me[14]/(me[10]+1),Ne=(me[9]+1)/me[5],Qe=(me[9]-1)/me[5],L=(me[8]-1)/me[0],ht=(be[8]+1)/be[0],Fe=Ce*L,Le=Ce*ht,xe=ee/(-L+ht),We=xe*-L;if(j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(We),V.translateZ(xe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),me[10]===-1)V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Ee=Ce+xe,b=Xe+xe,_=Fe-We,O=Le+(ee-We),K=Ne*Xe/b*Ee,J=Qe*Xe/b*Ee;V.projectionMatrix.makePerspective(_,O,K,J,Ee,b),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function re(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let j=V.near,se=V.far;v.texture!==null&&(v.depthNear>0&&(j=v.depthNear),v.depthFar>0&&(se=v.depthFar)),x.near=P.near=w.near=j,x.far=P.far=w.far=se,(C!==x.near||k!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,k=x.far),w.layers.mask=V.layers.mask|2,P.layers.mask=V.layers.mask|4,x.layers.mask=w.layers.mask|P.layers.mask;const ee=V.parent,me=x.cameras;re(x,ee);for(let be=0;be<me.length;be++)re(me[be],ee);me.length===2?G(x,w,P):x.projectionMatrix.copy(w.projectionMatrix),fe(V,x,ee)};function fe(V,j,se){se===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(se.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ji*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let q=null;function ie(V,j){if(h=j.getViewerPose(c||r),g=j,h!==null){const se=h.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let ee=!1;se.length!==x.cameras.length&&(x.cameras.length=0,ee=!0);for(let be=0;be<se.length;be++){const Ce=se[be];let Xe=null;if(p!==null)Xe=p.getViewport(Ce);else{const Qe=d.getViewSubImage(u,Ce);Xe=Qe.viewport,be===0&&(e.setRenderTargetTextures(T,Qe.colorTexture,u.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(T))}let Ne=S[be];Ne===void 0&&(Ne=new Bt,Ne.layers.enable(be),Ne.viewport=new nt,S[be]=Ne),Ne.matrix.fromArray(Ce.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Ce.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),be===0&&(x.matrix.copy(Ne.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ee===!0&&x.cameras.push(Ne)}const me=i.enabledFeatures;if(me&&me.includes("depth-sensing")){const be=d.getDepthInformation(se[0]);be&&be.isValid&&be.texture&&v.init(e,be,i.renderState)}}for(let se=0;se<E.length;se++){const ee=y[se],me=E[se];ee!==null&&me!==void 0&&me.update(ee,j,c||r)}q&&q(V,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const he=new kl;he.setAnimationLoop(ie),this.setAnimationLoop=function(V){q=V},this.dispose=function(){}}}const Gn=new Vt,xm=new rt;function Mm(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Fl(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,T,E,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),v(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,T,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Et&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Et&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),E=T.envMap,y=T.envMapRotation;E&&(m.envMap.value=E,Gn.copy(y),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),m.envMapRotation.value.setFromMatrix4(xm.makeRotationFromEuler(Gn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Et&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ym(s,e,t,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const y=E.program;n.uniformBlockBinding(T,y)}function c(T,E){let y=i[T.id];y===void 0&&(g(T),y=h(T),i[T.id]=y,T.addEventListener("dispose",m));const N=E.program;n.updateUBOMapping(T,N);const A=e.render.frame;a[T.id]!==A&&(u(T),a[T.id]=A)}function h(T){const E=d();T.__bindingPointIndex=E;const y=s.createBuffer(),N=T.__size,A=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,N,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,y),y}function d(){for(let T=0;T<o;T++)if(r.indexOf(T)===-1)return r.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){const E=i[T.id],y=T.uniforms,N=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let A=0,w=y.length;A<w;A++){const P=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,x=P.length;S<x;S++){const C=P[S];if(p(C,A,S,N)===!0){const k=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let $=0;$<F.length;$++){const X=F[$],Q=v(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,k+W,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,W),W+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(T,E,y,N){const A=T.value,w=E+"_"+y;if(N[w]===void 0)return typeof A=="number"||typeof A=="boolean"?N[w]=A:N[w]=A.clone(),!0;{const P=N[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return N[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(T){const E=T.uniforms;let y=0;const N=16;for(let w=0,P=E.length;w<P;w++){const S=Array.isArray(E[w])?E[w]:[E[w]];for(let x=0,C=S.length;x<C;x++){const k=S[x],F=Array.isArray(k.value)?k.value:[k.value];for(let W=0,$=F.length;W<$;W++){const X=F[W],Q=v(X),G=y%N,re=G%Q.boundary,fe=G+re;y+=re,fe!==0&&N-fe<Q.storage&&(y+=N-fe),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=Q.storage}}}const A=y%N;return A>0&&(y+=N-A),T.__size=y,T.__cache={},this}function v(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const y=r.indexOf(E.__bindingPointIndex);r.splice(y,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete a[E.id]}function f(){for(const T in i)s.deleteBuffer(i[T]);r=[],i={},a={}}return{bind:l,update:c,dispose:f}}class Sm{constructor(e={}){const{canvas:t=rh(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this.toneMapping=Dn,this.toneMappingExposure=1;const y=this;let N=!1,A=0,w=0,P=null,S=-1,x=null;const C=new nt,k=new nt;let F=null;const W=new Ue(0);let $=0,X=t.width,Q=t.height,G=1,re=null,fe=null;const q=new nt(0,0,X,Q),ie=new nt(0,0,X,Q);let he=!1;const V=new Or;let j=!1,se=!1;const ee=new rt,me=new rt,be=new R,Ce=new nt,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function Qe(){return P===null?G:1}let L=n;function ht(M,I){return t.getContext(M,I)}try{const M={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cr}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",de,!1),L===null){const I="webgl2";if(L=ht(I,M),L===null)throw ht(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Fe,Le,xe,We,Ee,b,_,O,K,J,Y,Te,ce,ge,$e,te,ve,Re,De,_e,qe,ze,st,D;function le(){Fe=new Af(L),Fe.init(),ze=new um(L,Fe),Le=new yf(L,Fe,e,ze),xe=new cm(L,Fe),Le.reverseDepthBuffer&&u&&xe.buffers.depth.setReversed(!0),We=new Pf(L),Ee=new Yp,b=new dm(L,Fe,xe,Ee,Le,ze,We),_=new bf(y),O=new wf(y),K=new Fh(L),st=new xf(L,K),J=new Cf(L,K,We,st),Y=new Df(L,J,K,We),De=new Lf(L,Le,b),te=new Sf(Ee),Te=new $p(y,_,O,Fe,Le,st,te),ce=new Mm(y,Ee),ge=new Kp,$e=new nm(Fe),Re=new _f(y,_,O,xe,Y,p,l),ve=new om(y,Y,Le),D=new ym(L,We,Le,xe),_e=new Mf(L,Fe,We),qe=new Rf(L,Fe,We),We.programs=Te.programs,y.capabilities=Le,y.extensions=Fe,y.properties=Ee,y.renderLists=ge,y.shadowMap=ve,y.state=xe,y.info=We}le();const H=new _m(y,L);this.xr=H,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=Fe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Fe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize(X,Q,!1))},this.getSize=function(M){return M.set(X,Q)},this.setSize=function(M,I,B=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,Q=I,t.width=Math.floor(M*G),t.height=Math.floor(I*G),B===!0&&(t.style.width=M+"px",t.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(X*G,Q*G).floor()},this.setDrawingBufferSize=function(M,I,B){X=M,Q=I,G=B,t.width=Math.floor(M*B),t.height=Math.floor(I*B),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(q)},this.setViewport=function(M,I,B,z){M.isVector4?q.set(M.x,M.y,M.z,M.w):q.set(M,I,B,z),xe.viewport(C.copy(q).multiplyScalar(G).round())},this.getScissor=function(M){return M.copy(ie)},this.setScissor=function(M,I,B,z){M.isVector4?ie.set(M.x,M.y,M.z,M.w):ie.set(M,I,B,z),xe.scissor(k.copy(ie).multiplyScalar(G).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(M){xe.setScissorTest(he=M)},this.setOpaqueSort=function(M){re=M},this.setTransparentSort=function(M){fe=M},this.getClearColor=function(M){return M.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(M=!0,I=!0,B=!0){let z=0;if(M){let U=!1;if(P!==null){const ne=P.texture.format;U=ne===Ur||ne===Ir||ne===Dr}if(U){const ne=P.texture.type,ue=ne===yn||ne===Zn||ne===Qi||ne===Ri||ne===Pr||ne===Lr,Me=Re.getClearColor(),ye=Re.getClearAlpha(),Ie=Me.r,Be=Me.g,Se=Me.b;ue?(g[0]=Ie,g[1]=Be,g[2]=Se,g[3]=ye,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=Ie,v[1]=Be,v[2]=Se,v[3]=ye,L.clearBufferiv(L.COLOR,0,v))}else z|=L.COLOR_BUFFER_BIT}I&&(z|=L.DEPTH_BUFFER_BIT),B&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),ge.dispose(),$e.dispose(),Ee.dispose(),_.dispose(),O.dispose(),Y.dispose(),st.dispose(),D.dispose(),Te.dispose(),H.dispose(),H.removeEventListener("sessionstart",Hr),H.removeEventListener("sessionend",Wr),Fn.stop()};function Z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const M=We.autoReset,I=ve.enabled,B=ve.autoUpdate,z=ve.needsUpdate,U=ve.type;le(),We.autoReset=M,ve.enabled=I,ve.autoUpdate=B,ve.needsUpdate=z,ve.type=U}function de(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Oe(M){const I=M.target;I.removeEventListener("dispose",Oe),dt(I)}function dt(M){yt(M),Ee.remove(M)}function yt(M){const I=Ee.get(M).programs;I!==void 0&&(I.forEach(function(B){Te.releaseProgram(B)}),M.isShaderMaterial&&Te.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,B,z,U,ne){I===null&&(I=Xe);const ue=U.isMesh&&U.matrixWorld.determinant()<0,Me=tc(M,I,B,z,U);xe.setMaterial(z,ue);let ye=B.index,Ie=1;if(z.wireframe===!0){if(ye=J.getWireframeAttribute(B),ye===void 0)return;Ie=2}const Be=B.drawRange,Se=B.attributes.position;let je=Be.start*Ie,at=(Be.start+Be.count)*Ie;ne!==null&&(je=Math.max(je,ne.start*Ie),at=Math.min(at,(ne.start+ne.count)*Ie)),ye!==null?(je=Math.max(je,0),at=Math.min(at,ye.count)):Se!=null&&(je=Math.max(je,0),at=Math.min(at,Se.count));const ot=at-je;if(ot<0||ot===1/0)return;st.setup(U,z,Me,B,ye);let Pt,Ke=_e;if(ye!==null&&(Pt=K.get(ye),Ke=qe,Ke.setIndex(Pt)),U.isMesh)z.wireframe===!0?(xe.setLineWidth(z.wireframeLinewidth*Qe()),Ke.setMode(L.LINES)):Ke.setMode(L.TRIANGLES);else if(U.isLine){let we=z.linewidth;we===void 0&&(we=1),xe.setLineWidth(we*Qe()),U.isLineSegments?Ke.setMode(L.LINES):U.isLineLoop?Ke.setMode(L.LINE_LOOP):Ke.setMode(L.LINE_STRIP)}else U.isPoints?Ke.setMode(L.POINTS):U.isSprite&&Ke.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ke.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))Ke.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const we=U._multiDrawStarts,on=U._multiDrawCounts,Ze=U._multiDrawCount,jt=ye?K.get(ye).bytesPerElement:1,Jn=Ee.get(z).currentProgram.getUniforms();for(let Dt=0;Dt<Ze;Dt++)Jn.setValue(L,"_gl_DrawID",Dt),Ke.render(we[Dt]/jt,on[Dt])}else if(U.isInstancedMesh)Ke.renderInstances(je,ot,U.count);else if(B.isInstancedBufferGeometry){const we=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,on=Math.min(B.instanceCount,we);Ke.renderInstances(je,ot,on)}else Ke.render(je,ot)};function Je(M,I,B){M.transparent===!0&&M.side===Xt&&M.forceSinglePass===!1?(M.side=Et,M.needsUpdate=!0,os(M,I,B),M.side=Un,M.needsUpdate=!0,os(M,I,B),M.side=Xt):os(M,I,B)}this.compile=function(M,I,B=null){B===null&&(B=M),f=$e.get(B),f.init(I),E.push(f),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),M!==B&&M.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const z=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ne=U.material;if(ne)if(Array.isArray(ne))for(let ue=0;ue<ne.length;ue++){const Me=ne[ue];Je(Me,B,U),z.add(Me)}else Je(ne,B,U),z.add(ne)}),E.pop(),f=null,z},this.compileAsync=function(M,I,B=null){const z=this.compile(M,I,B);return new Promise(U=>{function ne(){if(z.forEach(function(ue){Ee.get(ue).currentProgram.isReady()&&z.delete(ue)}),z.size===0){U(M);return}setTimeout(ne,10)}Fe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Yt=null;function rn(M){Yt&&Yt(M)}function Hr(){Fn.stop()}function Wr(){Fn.start()}const Fn=new kl;Fn.setAnimationLoop(rn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(M){Yt=M,H.setAnimationLoop(M),M===null?Fn.stop():Fn.start()},H.addEventListener("sessionstart",Hr),H.addEventListener("sessionend",Wr),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(I),I=H.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,I,P),f=$e.get(M,E.length),f.init(I),E.push(f),me.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),V.setFromProjectionMatrix(me),se=this.localClippingEnabled,j=te.init(this.clippingPlanes,se),m=ge.get(M,T.length),m.init(),T.push(m),H.enabled===!0&&H.isPresenting===!0){const ne=y.xr.getDepthSensingMesh();ne!==null&&sa(ne,I,-1/0,y.sortObjects)}sa(M,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(re,fe),Ne=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Ne&&Re.addToRenderList(m,M),this.info.render.frame++,j===!0&&te.beginShadows();const B=f.state.shadowsArray;ve.render(B,M,I),j===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(f.setupLights(),I.isArrayCamera){const ne=I.cameras;if(U.length>0)for(let ue=0,Me=ne.length;ue<Me;ue++){const ye=ne[ue];qr(z,U,M,ye)}Ne&&Re.render(M);for(let ue=0,Me=ne.length;ue<Me;ue++){const ye=ne[ue];Xr(m,M,ye,ye.viewport)}}else U.length>0&&qr(z,U,M,I),Ne&&Re.render(M),Xr(m,M,I);P!==null&&(b.updateMultisampleRenderTarget(P),b.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(y,M,I),st.resetDefaultState(),S=-1,x=null,E.pop(),E.length>0?(f=E[E.length-1],j===!0&&te.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function sa(M,I,B,z){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||V.intersectsSprite(M)){z&&Ce.setFromMatrixPosition(M.matrixWorld).applyMatrix4(me);const ue=Y.update(M),Me=M.material;Me.visible&&m.push(M,ue,Me,B,Ce.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||V.intersectsObject(M))){const ue=Y.update(M),Me=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ce.copy(M.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ce.copy(ue.boundingSphere.center)),Ce.applyMatrix4(M.matrixWorld).applyMatrix4(me)),Array.isArray(Me)){const ye=ue.groups;for(let Ie=0,Be=ye.length;Ie<Be;Ie++){const Se=ye[Ie],je=Me[Se.materialIndex];je&&je.visible&&m.push(M,ue,je,B,Ce.z,Se)}}else Me.visible&&m.push(M,ue,Me,B,Ce.z,null)}}const ne=M.children;for(let ue=0,Me=ne.length;ue<Me;ue++)sa(ne[ue],I,B,z)}function Xr(M,I,B,z){const U=M.opaque,ne=M.transmissive,ue=M.transparent;f.setupLightsView(B),j===!0&&te.setGlobalState(y.clippingPlanes,B),z&&xe.viewport(C.copy(z)),U.length>0&&rs(U,I,B),ne.length>0&&rs(ne,I,B),ue.length>0&&rs(ue,I,B),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function qr(M,I,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new Lt(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?an:yn,minFilter:Ln,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const ne=f.state.transmissionRenderTarget[z.id],ue=z.viewport||C;ne.setSize(ue.z,ue.w);const Me=y.getRenderTarget();y.setRenderTarget(ne),y.getClearColor(W),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),Ne&&Re.render(B);const ye=y.toneMapping;y.toneMapping=Dn;const Ie=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),j===!0&&te.setGlobalState(y.clippingPlanes,z),rs(M,B,z),b.updateMultisampleRenderTarget(ne),b.updateRenderTargetMipmap(ne),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Se=0,je=I.length;Se<je;Se++){const at=I[Se],ot=at.object,Pt=at.geometry,Ke=at.material,we=at.group;if(Ke.side===Xt&&ot.layers.test(z.layers)){const on=Ke.side;Ke.side=Et,Ke.needsUpdate=!0,$r(ot,B,z,Pt,Ke,we),Ke.side=on,Ke.needsUpdate=!0,Be=!0}}Be===!0&&(b.updateMultisampleRenderTarget(ne),b.updateRenderTargetMipmap(ne))}y.setRenderTarget(Me),y.setClearColor(W,$),Ie!==void 0&&(z.viewport=Ie),y.toneMapping=ye}function rs(M,I,B){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,ne=M.length;U<ne;U++){const ue=M[U],Me=ue.object,ye=ue.geometry,Ie=z===null?ue.material:z,Be=ue.group;Me.layers.test(B.layers)&&$r(Me,I,B,ye,Ie,Be)}}function $r(M,I,B,z,U,ne){M.onBeforeRender(y,I,B,z,U,ne),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(y,I,B,z,M,ne),U.transparent===!0&&U.side===Xt&&U.forceSinglePass===!1?(U.side=Et,U.needsUpdate=!0,y.renderBufferDirect(B,I,z,U,M,ne),U.side=Un,U.needsUpdate=!0,y.renderBufferDirect(B,I,z,U,M,ne),U.side=Xt):y.renderBufferDirect(B,I,z,U,M,ne),M.onAfterRender(y,I,B,z,U,ne)}function os(M,I,B){I.isScene!==!0&&(I=Xe);const z=Ee.get(M),U=f.state.lights,ne=f.state.shadowsArray,ue=U.state.version,Me=Te.getParameters(M,U.state,ne,I,B),ye=Te.getProgramCacheKey(Me);let Ie=z.programs;z.environment=M.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(M.isMeshStandardMaterial?O:_).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Ie===void 0&&(M.addEventListener("dispose",Oe),Ie=new Map,z.programs=Ie);let Be=Ie.get(ye);if(Be!==void 0){if(z.currentProgram===Be&&z.lightsStateVersion===ue)return jr(M,Me),Be}else Me.uniforms=Te.getUniforms(M),M.onBeforeCompile(Me,y),Be=Te.acquireProgram(Me,ye),Ie.set(ye,Be),z.uniforms=Me.uniforms;const Se=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Se.clippingPlanes=te.uniform),jr(M,Me),z.needsLights=ic(M),z.lightsStateVersion=ue,z.needsLights&&(Se.ambientLightColor.value=U.state.ambient,Se.lightProbe.value=U.state.probe,Se.directionalLights.value=U.state.directional,Se.directionalLightShadows.value=U.state.directionalShadow,Se.spotLights.value=U.state.spot,Se.spotLightShadows.value=U.state.spotShadow,Se.rectAreaLights.value=U.state.rectArea,Se.ltc_1.value=U.state.rectAreaLTC1,Se.ltc_2.value=U.state.rectAreaLTC2,Se.pointLights.value=U.state.point,Se.pointLightShadows.value=U.state.pointShadow,Se.hemisphereLights.value=U.state.hemi,Se.directionalShadowMap.value=U.state.directionalShadowMap,Se.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Se.spotShadowMap.value=U.state.spotShadowMap,Se.spotLightMatrix.value=U.state.spotLightMatrix,Se.spotLightMap.value=U.state.spotLightMap,Se.pointShadowMap.value=U.state.pointShadowMap,Se.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Be,z.uniformsList=null,Be}function Yr(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Gs.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function jr(M,I){const B=Ee.get(M);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function tc(M,I,B,z,U){I.isScene!==!0&&(I=Xe),b.resetTextureUnits();const ne=I.fog,ue=z.isMeshStandardMaterial?I.environment:null,Me=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ii,ye=(z.isMeshStandardMaterial?O:_).get(z.envMap||ue),Ie=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Be=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Se=!!B.morphAttributes.position,je=!!B.morphAttributes.normal,at=!!B.morphAttributes.color;let ot=Dn;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ot=y.toneMapping);const Pt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ke=Pt!==void 0?Pt.length:0,we=Ee.get(z),on=f.state.lights;if(j===!0&&(se===!0||M!==x)){const Gt=M===x&&z.id===S;te.setState(z,M,Gt)}let Ze=!1;z.version===we.__version?(we.needsLights&&we.lightsStateVersion!==on.state.version||we.outputColorSpace!==Me||U.isBatchedMesh&&we.batching===!1||!U.isBatchedMesh&&we.batching===!0||U.isBatchedMesh&&we.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&we.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&we.instancing===!1||!U.isInstancedMesh&&we.instancing===!0||U.isSkinnedMesh&&we.skinning===!1||!U.isSkinnedMesh&&we.skinning===!0||U.isInstancedMesh&&we.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&we.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&we.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&we.instancingMorph===!1&&U.morphTexture!==null||we.envMap!==ye||z.fog===!0&&we.fog!==ne||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==te.numPlanes||we.numIntersection!==te.numIntersection)||we.vertexAlphas!==Ie||we.vertexTangents!==Be||we.morphTargets!==Se||we.morphNormals!==je||we.morphColors!==at||we.toneMapping!==ot||we.morphTargetsCount!==Ke)&&(Ze=!0):(Ze=!0,we.__version=z.version);let jt=we.currentProgram;Ze===!0&&(jt=os(z,I,U));let Jn=!1,Dt=!1,Ni=!1;const lt=jt.getUniforms(),tn=we.uniforms;if(xe.useProgram(jt.program)&&(Jn=!0,Dt=!0,Ni=!0),z.id!==S&&(S=z.id,Dt=!0),Jn||x!==M){xe.buffers.depth.getReversed()?(ee.copy(M.projectionMatrix),lh(ee),ch(ee),lt.setValue(L,"projectionMatrix",ee)):lt.setValue(L,"projectionMatrix",M.projectionMatrix),lt.setValue(L,"viewMatrix",M.matrixWorldInverse);const Sn=lt.map.cameraPosition;Sn!==void 0&&Sn.setValue(L,be.setFromMatrixPosition(M.matrixWorld)),Le.logarithmicDepthBuffer&&lt.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&lt.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,Dt=!0,Ni=!0)}if(U.isSkinnedMesh){lt.setOptional(L,U,"bindMatrix"),lt.setOptional(L,U,"bindMatrixInverse");const Gt=U.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),lt.setValue(L,"boneTexture",Gt.boneTexture,b))}U.isBatchedMesh&&(lt.setOptional(L,U,"batchingTexture"),lt.setValue(L,"batchingTexture",U._matricesTexture,b),lt.setOptional(L,U,"batchingIdTexture"),lt.setValue(L,"batchingIdTexture",U._indirectTexture,b),lt.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&lt.setValue(L,"batchingColorTexture",U._colorsTexture,b));const Fi=B.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&De.update(U,B,jt),(Dt||we.receiveShadow!==U.receiveShadow)&&(we.receiveShadow=U.receiveShadow,lt.setValue(L,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(tn.envMap.value=ye,tn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(tn.envMapIntensity.value=I.environmentIntensity),Dt&&(lt.setValue(L,"toneMappingExposure",y.toneMappingExposure),we.needsLights&&nc(tn,Ni),ne&&z.fog===!0&&ce.refreshFogUniforms(tn,ne),ce.refreshMaterialUniforms(tn,z,G,Q,f.state.transmissionRenderTarget[M.id]),Gs.upload(L,Yr(we),tn,b)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Gs.upload(L,Yr(we),tn,b),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&lt.setValue(L,"center",U.center),lt.setValue(L,"modelViewMatrix",U.modelViewMatrix),lt.setValue(L,"normalMatrix",U.normalMatrix),lt.setValue(L,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Gt=z.uniformsGroups;for(let Sn=0,bn=Gt.length;Sn<bn;Sn++){const Kr=Gt[Sn];D.update(Kr,jt),D.bind(Kr,jt)}}return jt}function nc(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function ic(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,I,B){Ee.get(M.texture).__webglTexture=I,Ee.get(M.depthTexture).__webglTexture=B;const z=Ee.get(M);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const B=Ee.get(M);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,B=0){P=M,A=I,w=B;let z=!0,U=null,ne=!1,ue=!1;if(M){const ye=Ee.get(M);if(ye.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(ye.__webglFramebuffer===void 0)b.setupRenderTarget(M);else if(ye.__hasExternalTextures)b.rebindTextures(M,Ee.get(M.texture).__webglTexture,Ee.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Se=M.depthTexture;if(ye.__boundDepthTexture!==Se){if(Se!==null&&Ee.has(Se)&&(M.width!==Se.image.width||M.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(M)}}const Ie=M.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ue=!0);const Be=Ee.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[I])?U=Be[I][B]:U=Be[I],ne=!0):M.samples>0&&b.useMultisampledRTT(M)===!1?U=Ee.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?U=Be[B]:U=Be,C.copy(M.viewport),k.copy(M.scissor),F=M.scissorTest}else C.copy(q).multiplyScalar(G).floor(),k.copy(ie).multiplyScalar(G).floor(),F=he;if(xe.bindFramebuffer(L.FRAMEBUFFER,U)&&z&&xe.drawBuffers(M,U),xe.viewport(C),xe.scissor(k),xe.setScissorTest(F),ne){const ye=Ee.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,ye.__webglTexture,B)}else if(ue){const ye=Ee.get(M.texture),Ie=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.__webglTexture,B||0,Ie)}S=-1},this.readRenderTargetPixels=function(M,I,B,z,U,ne,ue){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(Me=Me[ue]),Me){xe.bindFramebuffer(L.FRAMEBUFFER,Me);try{const ye=M.texture,Ie=ye.format,Be=ye.type;if(!Le.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-z&&B>=0&&B<=M.height-U&&L.readPixels(I,B,z,U,ze.convert(Ie),ze.convert(Be),ne)}finally{const ye=P!==null?Ee.get(P).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(M,I,B,z,U,ne,ue){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(Me=Me[ue]),Me){const ye=M.texture,Ie=ye.format,Be=ye.type;if(!Le.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-z&&B>=0&&B<=M.height-U){xe.bindFramebuffer(L.FRAMEBUFFER,Me);const Se=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Se),L.bufferData(L.PIXEL_PACK_BUFFER,ne.byteLength,L.STREAM_READ),L.readPixels(I,B,z,U,ze.convert(Ie),ze.convert(Be),0);const je=P!==null?Ee.get(P).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,je);const at=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await oh(L,at,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Se),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ne),L.deleteBuffer(Se),L.deleteSync(at),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,I=null,B=0){M.isTexture!==!0&&(qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const z=Math.pow(2,-B),U=Math.floor(M.image.width*z),ne=Math.floor(M.image.height*z),ue=I!==null?I.x:0,Me=I!==null?I.y:0;b.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,ue,Me,U,ne),xe.unbindTexture()},this.copyTextureToTexture=function(M,I,B=null,z=null,U=0){M.isTexture!==!0&&(qi("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,M=arguments[1],I=arguments[2],U=arguments[3]||0,B=null);let ne,ue,Me,ye,Ie,Be,Se,je,at;const ot=M.isCompressedTexture?M.mipmaps[U]:M.image;B!==null?(ne=B.max.x-B.min.x,ue=B.max.y-B.min.y,Me=B.isBox3?B.max.z-B.min.z:1,ye=B.min.x,Ie=B.min.y,Be=B.isBox3?B.min.z:0):(ne=ot.width,ue=ot.height,Me=ot.depth||1,ye=0,Ie=0,Be=0),z!==null?(Se=z.x,je=z.y,at=z.z):(Se=0,je=0,at=0);const Pt=ze.convert(I.format),Ke=ze.convert(I.type);let we;I.isData3DTexture?(b.setTexture3D(I,0),we=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(b.setTexture2DArray(I,0),we=L.TEXTURE_2D_ARRAY):(b.setTexture2D(I,0),we=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const on=L.getParameter(L.UNPACK_ROW_LENGTH),Ze=L.getParameter(L.UNPACK_IMAGE_HEIGHT),jt=L.getParameter(L.UNPACK_SKIP_PIXELS),Jn=L.getParameter(L.UNPACK_SKIP_ROWS),Dt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ot.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ie),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Be);const Ni=M.isDataArrayTexture||M.isData3DTexture,lt=I.isDataArrayTexture||I.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const tn=Ee.get(M),Fi=Ee.get(I),Gt=Ee.get(tn.__renderTarget),Sn=Ee.get(Fi.__renderTarget);xe.bindFramebuffer(L.READ_FRAMEBUFFER,Gt.__webglFramebuffer),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Sn.__webglFramebuffer);for(let bn=0;bn<Me;bn++)Ni&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(M).__webglTexture,U,Be+bn),M.isDepthTexture?(lt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(I).__webglTexture,U,at+bn),L.blitFramebuffer(ye,Ie,ne,ue,Se,je,ne,ue,L.DEPTH_BUFFER_BIT,L.NEAREST)):lt?L.copyTexSubImage3D(we,U,Se,je,at+bn,ye,Ie,ne,ue):L.copyTexSubImage2D(we,U,Se,je,at+bn,ye,Ie,ne,ue);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else lt?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(we,U,Se,je,at,ne,ue,Me,Pt,Ke,ot.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(we,U,Se,je,at,ne,ue,Me,Pt,ot.data):L.texSubImage3D(we,U,Se,je,at,ne,ue,Me,Pt,Ke,ot):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Se,je,ne,ue,Pt,Ke,ot.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Se,je,ot.width,ot.height,Pt,ot.data):L.texSubImage2D(L.TEXTURE_2D,U,Se,je,ne,ue,Pt,Ke,ot);L.pixelStorei(L.UNPACK_ROW_LENGTH,on),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ze),L.pixelStorei(L.UNPACK_SKIP_PIXELS,jt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Jn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Dt),U===0&&I.generateMipmaps&&L.generateMipmap(we),xe.unbindTexture()},this.copyTextureToTexture3D=function(M,I,B=null,z=null,U=0){return M.isTexture!==!0&&(qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,M=arguments[2],I=arguments[3],U=arguments[4]||0),qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,I,B,z,U)},this.initRenderTarget=function(M){Ee.get(M).__webglFramebuffer===void 0&&b.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?b.setTextureCube(M,0):M.isData3DTexture?b.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?b.setTexture2DArray(M,0):b.setTexture2D(M,0),xe.unbindTexture()},this.resetState=function(){A=0,w=0,P=null,xe.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}class Xl extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vt,this.environmentIntensity=1,this.environmentRotation=new Vt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Er,this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,a=this.stride;i<a;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tt=new R;class Xs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),a=et(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class kr extends Nn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let pi;const Vi=new R,mi=new R,gi=new R,vi=new Ae,Gi=new Ae,ql=new rt,Rs=new R,Hi=new R,Ps=new R,jo=new Ae,Ia=new Ae,Ko=new Ae;class $l extends pt{constructor(e=new kr){if(super(),this.isSprite=!0,this.type="Sprite",pi===void 0){pi=new xt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bm(t,5);pi.setIndex([0,1,2,0,2,3]),pi.setAttribute("position",new Xs(n,3,0,!1)),pi.setAttribute("uv",new Xs(n,2,3,!1))}this.geometry=pi,this.material=e,this.center=new Ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mi.setFromMatrixScale(this.matrixWorld),ql.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mi.multiplyScalar(-gi.z);const n=this.material.rotation;let i,a;n!==0&&(a=Math.cos(n),i=Math.sin(n));const r=this.center;Ls(Rs.set(-.5,-.5,0),gi,r,mi,i,a),Ls(Hi.set(.5,-.5,0),gi,r,mi,i,a),Ls(Ps.set(.5,.5,0),gi,r,mi,i,a),jo.set(0,0),Ia.set(1,0),Ko.set(1,1);let o=e.ray.intersectTriangle(Rs,Hi,Ps,!1,Vi);if(o===null&&(Ls(Hi.set(-.5,.5,0),gi,r,mi,i,a),Ia.set(0,1),o=e.ray.intersectTriangle(Rs,Ps,Hi,!1,Vi),o===null))return;const l=e.ray.origin.distanceTo(Vi);l<e.near||l>e.far||t.push({distance:l,point:Vi.clone(),uv:qt.getInterpolation(Vi,Rs,Hi,Ps,jo,Ia,Ko,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ls(s,e,t,n,i,a){vi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Gi.x=a*vi.x-i*vi.y,Gi.y=i*vi.x+a*vi.y):Gi.copy(vi),s.copy(e),s.x+=Gi.x,s.y+=Gi.y,s.applyMatrix4(ql)}class Em extends Nn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qs=new R,$s=new R,Zo=new rt,Wi=new Fr,Ds=new ss,Ua=new R,Qo=new R;class Tm extends pt{constructor(e=new xt,t=new Em){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)qs.fromBufferAttribute(t,i-1),$s.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=qs.distanceTo($s);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(i),Ds.radius+=a,e.ray.intersectsSphere(Ds)===!1)return;Zo.copy(i).invert(),Wi.copy(e.ray).applyMatrix4(Zo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let v=p,m=g-1;v<m;v+=c){const f=h.getX(v),T=h.getX(v+1),E=Is(this,e,Wi,l,f,T);E&&t.push(E)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),f=Is(this,e,Wi,l,v,m);f&&t.push(f)}}else{const p=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let v=p,m=g-1;v<m;v+=c){const f=Is(this,e,Wi,l,v,v+1);f&&t.push(f)}if(this.isLineLoop){const v=Is(this,e,Wi,l,g-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Is(s,e,t,n,i,a){const r=s.geometry.attributes.position;if(qs.fromBufferAttribute(r,i),$s.fromBufferAttribute(r,a),t.distanceSqToSegment(qs,$s,Ua,Qo)>n)return;Ua.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ua);if(!(l<e.near||l>e.far))return{distance:l,point:Qo.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Jo=new R,el=new R;class wm extends Tm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,a=t.count;i<a;i+=2)Jo.fromBufferAttribute(t,i),el.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Jo.distanceTo(el);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Am extends Nn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tl=new rt,wr=new Fr,Us=new ss,Ns=new R;class Yl extends pt{constructor(e=new xt,t=new Am){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(i),Us.radius+=a,e.ray.intersectsSphere(Us)===!1)return;tl.copy(i).invert(),wr.copy(e.ray).applyMatrix4(tl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=u,v=p;g<v;g++){const m=c.getX(g);Ns.fromBufferAttribute(d,m),nl(Ns,m,l,i,e,t,this)}}else{const u=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let g=u,v=p;g<v;g++)Ns.fromBufferAttribute(d,g),nl(Ns,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function nl(s,e,t,n,i,a,r){const o=wr.distanceSqToPoint(s);if(o<t){const l=new R;wr.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class At extends Rt{constructor(e,t,n,i,a,r,o,l,c){super(e,t,n,i,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ea extends xt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const a=[],r=[],o=[],l=[],c=new R,h=new Ae;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const p=n+d/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[u]/e+1)/2,h.y=(r[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(o,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ft extends xt{constructor(e=1,t=1,n=1,i=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),a=Math.floor(a);const h=[],d=[],u=[],p=[];let g=0;const v=[],m=n/2;let f=0;T(),r===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ct(d,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(p,2));function T(){const y=new R,N=new R;let A=0;const w=(t-e)/n;for(let P=0;P<=a;P++){const S=[],x=P/a,C=x*(t-e)+e;for(let k=0;k<=i;k++){const F=k/i,W=F*l+o,$=Math.sin(W),X=Math.cos(W);N.x=C*$,N.y=-x*n+m,N.z=C*X,d.push(N.x,N.y,N.z),y.set($,w,X).normalize(),u.push(y.x,y.y,y.z),p.push(F,1-x),S.push(g++)}v.push(S)}for(let P=0;P<i;P++)for(let S=0;S<a;S++){const x=v[S][P],C=v[S+1][P],k=v[S+1][P+1],F=v[S][P+1];(e>0||S!==0)&&(h.push(x,C,F),A+=3),(t>0||S!==a-1)&&(h.push(C,k,F),A+=3)}c.addGroup(f,A,0),f+=A}function E(y){const N=g,A=new Ae,w=new R;let P=0;const S=y===!0?e:t,x=y===!0?1:-1;for(let k=1;k<=i;k++)d.push(0,m*x,0),u.push(0,x,0),p.push(.5,.5),g++;const C=g;for(let k=0;k<=i;k++){const W=k/i*l+o,$=Math.cos(W),X=Math.sin(W);w.x=S*X,w.y=m*x,w.z=S*$,d.push(w.x,w.y,w.z),u.push(0,x,0),A.x=$*.5+.5,A.y=X*.5*x+.5,p.push(A.x,A.y),g++}for(let k=0;k<i;k++){const F=N+k,W=C+k;y===!0?h.push(W,W+1,F):h.push(W+1,W,F),P+=3}c.addGroup(f,P,y===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ta extends Ft{constructor(e=1,t=1,n=32,i=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new ta(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zr extends xt{constructor(e=.5,t=1,n=32,i=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:a,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/i,p=new R,g=new Ae;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const f=a+m/n*r;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<i;v++){const m=v*(n+1);for(let f=0;f<n;f++){const T=f+m,E=T,y=T+n+1,N=T+n+2,A=T+1;o.push(E,y,A),o.push(y,N,A)}}this.setIndex(o),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Vr extends xt{constructor(e=1,t=.4,n=12,i=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:a},n=Math.floor(n),i=Math.floor(i);const r=[],o=[],l=[],c=[],h=new R,d=new R,u=new R;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const v=g/i*a,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const v=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,T=(i+1)*p+g;r.push(v,m,T),r.push(m,f,T)}this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ct extends Nn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Al,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cm extends Ct{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class na extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Rm extends na{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Na=new rt,il=new R,sl=new R;class jl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;il.setFromMatrixPosition(e.matrixWorld),t.position.copy(il),sl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sl),t.updateMatrixWorld(),Na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const al=new rt,Xi=new R,Fa=new R;class Pm extends jl{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Xi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xi),Fa.copy(n.position),Fa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fa),n.updateMatrixWorld(),i.makeTranslation(-Xi.x,-Xi.y,-Xi.z),al.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al)}}class yi extends na{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Pm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Lm extends jl{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rl extends na{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Lm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Dm extends na{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Kl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ol(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ol();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ol(){return performance.now()}class Im extends Qn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cr);const Um=s=>{let e;const t=new Set,n=(c,h)=>{const d=typeof c=="function"?c(e):c;if(!Object.is(d,e)){const u=e;e=h??(typeof d!="object"||d===null)?d:Object.assign({},e,d),t.forEach(p=>p(e,u))}},i=()=>e,o={setState:n,getState:i,getInitialState:()=>l,subscribe:c=>(t.add(c),()=>t.delete(c))},l=e=s(n,i,o);return o},Nm=(s=>Um);var Pe=(s=>(s.Walk="walk",s.Telescope="telescope",s.Studio="studio",s.Menu="menu",s))(Pe||{}),Ge=(s=>(s.Clear="clear",s.PartlyCloudy="partly_cloudy",s.Cloudy="cloudy",s.Rainy="rainy",s))(Ge||{}),it=(s=>(s.S="S",s.A="A",s.B="B",s.C="C",s.D="D",s))(it||{}),Ot=(s=>(s.StarField="star_field",s.Planet="planet",s.Messier="messier",s.SpecialEvent="special_event",s))(Ot||{});const Ys=[{id:"hehuanshan",name:"合歡山暗空公園",nameEn:"Hehuan Mountain Dark Sky Park",latitude:24.1433,longitude:121.2858,altitude:3275,lightPollution:.1,description:"台灣第一座國際暗空公園，海拔3275公尺，冬季銀河拱橋絕佳觀測地。"},{id:"mauna_kea",name:"茂納凱亞天文台",nameEn:"Mauna Kea Observatory",latitude:19.8207,longitude:-155.4681,altitude:4207,lightPollution:.05,description:"夏威夷最高峰，全球最佳天文觀測站之一，海拔4207公尺。"},{id:"atacama",name:"阿塔卡馬沙漠",nameEn:"Atacama Desert, Chile",latitude:-24.6275,longitude:-70.4044,altitude:2635,lightPollution:.02,description:"地球上最乾燥的沙漠，極低光害，ESO天文台所在地。"},{id:"uluru",name:"烏魯魯（艾爾斯岩）",nameEn:"Uluru, Australia",latitude:-25.3444,longitude:131.0369,altitude:863,lightPollution:.08,description:"澳洲中部紅土荒野，南半球絕佳觀星地，可見南十字和麥哲倫雲。"},{id:"la_palma",name:"拉帕爾馬天文台",nameEn:"Roque de los Muchachos, La Palma",latitude:28.7606,longitude:-17.8816,altitude:2396,lightPollution:.03,description:"加那利群島，歐洲北半球最大的天文觀測站群。"},{id:"namib",name:"納米比沙漠",nameEn:"NamibRand Nature Reserve",latitude:-25.0494,longitude:15.9924,altitude:1200,lightPollution:.01,description:"非洲首座國際暗空保護區，世界上光害最低的地方之一。"}],js=[{level:1,name:"入門折射鏡 60mm",apertureMm:60,limitingMagnitude:10,minFov:2.5,maxFov:60,chromaticAberration:.7,trackingAccuracy:.2,price:0},{level:2,name:"中階牛頓反射鏡 150mm",apertureMm:150,limitingMagnitude:12,minFov:1,maxFov:60,chromaticAberration:.1,trackingAccuracy:.5,price:500},{level:3,name:"施密特-卡塞格林 200mm",apertureMm:200,limitingMagnitude:13.5,minFov:.5,maxFov:60,chromaticAberration:.2,trackingAccuracy:.7,price:2e3},{level:4,name:"高階 APO 折射鏡 130mm",apertureMm:130,limitingMagnitude:12.5,minFov:.8,maxFov:60,chromaticAberration:.02,trackingAccuracy:.85,price:3500},{level:5,name:"天文台級 RC 鏡 350mm",apertureMm:350,limitingMagnitude:15,minFov:.2,maxFov:60,chromaticAberration:.01,trackingAccuracy:.95,price:8e3}],Fm=[{id:"eyepiece_wide",name:"廣角目鏡 32mm",type:"eyepiece",description:"82° 超廣角視野，適合觀測大範圍星野。",price:200,effects:{maxFovBonus:5,minFovBonus:.5},owned:!1},{id:"eyepiece_barlow",name:"巴羅鏡 2x",type:"eyepiece",description:"倍增放大倍率，適合行星觀測。",price:150,effects:{minFovMultiplier:.5},owned:!1},{id:"filter_halpha",name:"H-alpha 窄帶濾鏡",type:"filter",description:"增強氫元素發射星雲的對比度。",price:300,effects:{nebulaBonus:1.5},owned:!1},{id:"filter_oiii",name:"OIII 窄帶濾鏡",type:"filter",description:"增強氧元素行星狀星雲的對比度。",price:350,effects:{planetaryNebulaBonus:1.8},owned:!1},{id:"filter_light_pollution",name:"光害濾鏡",type:"filter",description:"減少光害影響，提升暗淡天體可見度。",price:180,effects:{lightPollutionReduction:.3},owned:!1},{id:"camera_cooled",name:"製冷 CCD 相機",type:"camera",description:"降低感光元件熱雜訊，長曝光效果大幅提升。",price:1200,effects:{exposureGain:1.5,noiseReduction:.5},owned:!1},{id:"camera_cmos",name:"高量子效率 CMOS 相機",type:"camera",description:"最新 BSI CMOS 感光元件，量子效率 >90%。",price:2500,effects:{exposureGain:2,noiseReduction:.7},owned:!1},{id:"finder_red_dot",name:"紅點尋星導航儀",type:"mount",description:"在望遠鏡目鏡頂部投射即時電子導航箭頭與距離角度，指引鏡筒快速對準深空天體。",price:300,effects:{finderNav:1},owned:!1},{id:"mount_eq",name:"赤道儀升級",type:"mount",description:"精密赤道儀追蹤，消除長曝光星跡。",price:800,effects:{trackingAccuracyBonus:.3},owned:!1},{id:"mount_goto",name:"GoTo 電子自動尋星系統",type:"mount",description:"高精度自動天體跟蹤與電子尋星羅盤，大幅提升目標定位精確度與曝光穩定度。",price:1200,effects:{trackingAccuracyBonus:.5,finderNav:1,autoFind:1},owned:!1}];function Om(s){return js.find(e=>e.level===s)??js[0]}const Gr="stargazer_sim_save_v1";function Bm(){try{const s=localStorage.getItem(Gr);if(!s)return null;const e=JSON.parse(s);return e&&Array.isArray(e.photos)&&(e.photos=e.photos.map(t=>({...t,timestamp:t.timestamp?new Date(t.timestamp):new Date}))),e}catch(s){return console.warn("[Storage] Failed to load save data:",s),null}}let Oa=null;function km(s){Oa&&clearTimeout(Oa),Oa=setTimeout(()=>{try{const e={money:s.money,telescopeLevel:s.telescopeLevel,accessories:s.accessories,photos:(s.photos||[]).slice(0,40),unlockedLocations:s.unlockedLocations,completedQuestIds:s.completedQuestIds||[],discoveredTargets:s.discoveredTargets||[],masterVolume:s.masterVolume,machineVolume:s.machineVolume,ambientVolume:s.ambientVolume,weatherVolume:s.weatherVolume,sfxVolume:s.sfxVolume,isMuted:s.isMuted};localStorage.setItem(Gr,JSON.stringify(e))}catch(e){console.warn("[Storage] Auto-save error:",e)}},400)}const Nt=Bm(),oe=Nm()((s,e)=>({currentTime:new Date,timeScale:1,isTimePaused:!1,currentLocation:Ys[0],unlockedLocations:Nt?.unlockedLocations||[Ys[0].id],money:Nt?.money??0,telescopeLevel:Nt?.telescopeLevel??1,accessories:Nt?.accessories||JSON.parse(JSON.stringify(Fm)),photos:Nt?.photos||[],gameMode:Pe.Walk,weather:Ge.Clear,weatherTimer:300,telescopeRa:0,telescopeDec:45,telescopeAzimuth:180,telescopeAltitude:45,currentFov:60,isExposing:!1,exposureElapsed:0,exposureProgress:0,exposureDuration:30,completedQuestIds:Nt?.completedQuestIds||[],discoveredTargets:Nt?.discoveredTargets||[],timeReversalCostPerHour:50,masterVolume:Nt?.masterVolume??.7,machineVolume:Nt?.machineVolume??.7,ambientVolume:Nt?.ambientVolume??.8,weatherVolume:Nt?.weatherVolume??.8,sfxVolume:Nt?.sfxVolume??.8,isMuted:Nt?.isMuted??!1,showConstellations:!0,showStarNames:!0,showGrid:!1,isUIVisible:!0,toggleUIVisibility:()=>s(t=>({isUIVisible:!t.isUIVisible})),setMasterVolume:t=>s({masterVolume:Math.max(0,Math.min(1,t))}),setMachineVolume:t=>s({machineVolume:Math.max(0,Math.min(1,t))}),setAmbientVolume:t=>s({ambientVolume:Math.max(0,Math.min(1,t))}),setWeatherVolume:t=>s({weatherVolume:Math.max(0,Math.min(1,t))}),setSfxVolume:t=>s({sfxVolume:Math.max(0,Math.min(1,t))}),toggleMute:()=>s(t=>({isMuted:!t.isMuted})),setGameMode:t=>s({gameMode:t}),setTimeScale:t=>s({timeScale:Math.max(0,t)}),toggleTimePause:()=>s(t=>({isTimePaused:!t.isTimePaused})),advanceTime:t=>s(n=>n.isTimePaused?{}:{currentTime:new Date(n.currentTime.getTime()+t*n.timeScale)}),reverseTime:t=>(s(n=>({currentTime:new Date(n.currentTime.getTime()-t*36e5)})),!0),advanceTimeHours:t=>{s(n=>({currentTime:new Date(n.currentTime.getTime()+t*36e5)}))},advanceTimeDays:t=>{s(n=>{const i=new Date(n.currentTime);return i.setDate(i.getDate()+t),{currentTime:i}})},advanceTimeYears:t=>{s(n=>{const i=new Date(n.currentTime);return i.setFullYear(i.getFullYear()+t),{currentTime:i}})},resetToRealTime:()=>{s({currentTime:new Date})},setTime:t=>{s({currentTime:t})},setWeather:t=>s({weather:t}),setWeatherTimer:t=>s({weatherTimer:t}),setLocation:t=>s({currentLocation:t}),unlockLocation:t=>s(n=>n.unlockedLocations.includes(t)?{}:{unlockedLocations:[...n.unlockedLocations,t]}),addMoney:t=>s(n=>({money:n.money+t})),spendMoney:t=>{const n=e();return n.money<t?!1:(s({money:n.money-t}),!0)},addPhoto:t=>s(n=>({photos:[...n.photos,t]})),sellPhoto:t=>{const n=e(),i=n.photos.find(a=>a.id===t);return!i||i.sold?0:(s({money:n.money+i.sellPrice,photos:n.photos.map(a=>a.id===t?{...a,sold:!0}:a)}),i.sellPrice)},sellAllPhotos:()=>{const t=e(),i=t.photos.filter(a=>!a.sold).reduce((a,r)=>a+r.sellPrice,0);return i===0?0:(s({money:t.money+i,photos:t.photos.map(a=>({...a,sold:!0}))}),i)},upgradeTelescope:t=>{const n=e(),i=js.find(a=>a.level===t);return!i||n.money<i.price||n.telescopeLevel>=t?!1:(s({money:n.money-i.price,telescopeLevel:t}),!0)},buyAccessory:t=>{const n=e(),i=n.accessories.findIndex(o=>o.id===t);if(i===-1)return!1;const a=n.accessories[i];if(a.owned||n.money<a.price)return!1;const r=[...n.accessories];return r[i]={...a,owned:!0},s({money:n.money-a.price,accessories:r}),!0},setTelescopePointing:(t,n)=>s({telescopeRa:t,telescopeDec:n}),setTelescopeHorizontal:(t,n)=>s({telescopeAzimuth:t,telescopeAltitude:n}),setFov:t=>s({currentFov:t}),startExposure:t=>s(n=>({isExposing:!0,exposureDuration:t??n.exposureDuration,exposureProgress:0,exposureElapsed:0})),stopExposure:()=>s({isExposing:!1,exposureProgress:0,exposureElapsed:0}),updateExposureProgress:t=>s({exposureProgress:Math.min(1,t)}),updateExposureElapsed:t=>s({exposureElapsed:t}),toggleConstellations:()=>s(t=>({showConstellations:!t.showConstellations})),toggleStarNames:()=>s(t=>({showStarNames:!t.showStarNames})),toggleGrid:()=>s(t=>({showGrid:!t.showGrid})),resetSaveData:()=>{try{localStorage.removeItem(Gr),location.reload()}catch(t){console.warn("Failed to clear save data:",t)}}}));oe.subscribe(s=>{km(s)});const Zl=[{name:"大犬座α · 天狼星 Sirius",ra:6.752,dec:-16.716,mag:-1.46,bv:0,hip:32349},{name:"船底座α · 老人星 Canopus",ra:6.399,dec:-52.696,mag:-.72,bv:.15,hip:30438},{name:"半人馬座α · 南門二 Alpha Centauri",ra:14.661,dec:-60.835,mag:-.01,bv:.71,hip:71683},{name:"牧夫座α · 大角星 Arcturus",ra:14.261,dec:19.182,mag:-.05,bv:1.23,hip:69673},{name:"天琴座α · 織女星 Vega",ra:18.616,dec:38.784,mag:.03,bv:0,hip:91262},{name:"御夫座α · 五車二 Capella",ra:5.278,dec:45.998,mag:.08,bv:.8,hip:24608},{name:"獵戶座β · 參宿七 Rigel",ra:5.242,dec:-8.202,mag:.18,bv:-.03,hip:24436},{name:"小犬座α · 南河三 Procyon",ra:7.655,dec:5.225,mag:.34,bv:.42,hip:37279},{name:"獵戶座α · 參宿四 Betelgeuse",ra:5.92,dec:7.407,mag:.42,bv:1.85,hip:27989},{name:"波江座α · 水委一 Achernar",ra:1.629,dec:-57.237,mag:.45,bv:-.16,hip:7588},{name:"半人馬座β · 馬腹一 Hadar",ra:14.064,dec:-60.373,mag:.61,bv:-.23,hip:68702},{name:"天鷹座α · 河鼓二 牛郎星 Altair",ra:19.846,dec:8.868,mag:.76,bv:.22,hip:97649},{name:"南十字座α · 十字架二 Acrux",ra:12.443,dec:-63.099,mag:.77,bv:-.24,hip:60718},{name:"金牛座α · 畢宿五 Aldebaran",ra:4.599,dec:16.509,mag:.87,bv:1.54,hip:21421},{name:"室女座α · 角宿一 Spica",ra:13.42,dec:-11.161,mag:.98,bv:-.24,hip:65474},{name:"天蠍座α · 心宿二 Antares",ra:16.49,dec:-26.432,mag:1.06,bv:1.83,hip:80763},{name:"雙子座β · 北河三 Pollux",ra:7.755,dec:28.026,mag:1.16,bv:1,hip:37826},{name:"南魚座α · 北落師門 Fomalhaut",ra:22.961,dec:-29.622,mag:1.17,bv:.09,hip:113368},{name:"天鵝座α · 天津四 Deneb",ra:20.69,dec:45.28,mag:1.25,bv:.09,hip:102098},{name:"南十字座β · 十字架三 Mimosa",ra:12.795,dec:-59.689,mag:1.25,bv:-.23,hip:62434},{name:"獅子座α · 軒轅十四 Regulus",ra:10.14,dec:11.967,mag:1.36,bv:-.11,hip:49669},{name:"大犬座ε · 弧矢一 Adhara",ra:6.977,dec:-28.972,mag:1.5,bv:-.21,hip:33579},{name:"雙子座α · 北河二 Castor",ra:7.577,dec:31.888,mag:1.58,bv:.03,hip:36850},{name:"南十字座γ · 十字架一 Gacrux",ra:12.519,dec:-57.113,mag:1.59,bv:1.6,hip:61084},{name:"天蠍座λ · 尾宿八 Shaula",ra:17.56,dec:-37.104,mag:1.62,bv:-.22,hip:85927},{name:"獵戶座γ · 參宿五 Bellatrix",ra:5.419,dec:6.35,mag:1.64,bv:-.22,hip:25336},{name:"金牛座β · 五車五 Elnath",ra:5.438,dec:28.608,mag:1.65,bv:-.13,hip:25428},{name:"小熊座α · 北極星 Polaris",ra:2.53,dec:89.264,mag:1.98,bv:.6,hip:11767},{name:"獵戶座ε · 參宿一 (腰帶中) Alnilam",ra:5.604,dec:-1.202,mag:1.69,bv:-.18,hip:26311},{name:"獵戶座ζ · 參宿三 (腰帶左) Alnitak",ra:5.679,dec:-1.943,mag:1.74,bv:-.21,hip:26727},{name:"獵戶座δ · 參宿二 (腰帶右) Mintaka",ra:5.533,dec:-.299,mag:2.25,bv:-.18,hip:25930},{name:"獵戶座κ · 參宿六 Saiph",ra:5.796,dec:-9.67,mag:2.07,bv:-.18,hip:27366},{name:"獵戶座λ · 觜宿一 Meissa",ra:5.585,dec:9.934,mag:3.39,bv:-.17,hip:26207},{name:"獵戶座θ1 · 伐二 (四合星) Trapezium",ra:5.589,dec:-5.387,mag:4.98,bv:-.15,hip:26220},{name:"獵戶座ι · 伐三 Hatsya",ra:5.591,dec:-5.9,mag:2.75,bv:-.24,hip:26241},{name:"獵戶座c · 伐一",ra:5.589,dec:-4.834,mag:4.58,bv:-.2,hip:26233},{name:"獵戶座π3 · 參宿增九 Tabit",ra:4.828,dec:6.961,mag:3.16,bv:.45,hip:22449},{name:"獵戶座η · 參宿增二 Saif al Jabbar",ra:5.407,dec:-2.397,mag:3.38,bv:-.17,hip:25281},{name:"大熊座α · 天樞 (北斗一) Dubhe",ra:11.062,dec:61.751,mag:1.81,bv:1.07,hip:54061},{name:"大熊座β · 天璇 (北斗二) Merak",ra:11.031,dec:56.382,mag:2.34,bv:.03,hip:53910},{name:"大熊座γ · 天璣 (北斗三) Phecda",ra:11.897,dec:53.695,mag:2.41,bv:.04,hip:58001},{name:"大熊座δ · 天權 (北斗四) Megrez",ra:12.257,dec:57.033,mag:3.32,bv:.08,hip:59774},{name:"大熊座ε · 玉衡 (北斗五) Alioth",ra:12.9,dec:55.96,mag:1.76,bv:-.02,hip:62956},{name:"大熊座ζ · 開陽 (北斗六) Mizar",ra:13.399,dec:54.926,mag:2.23,bv:.02,hip:65378},{name:"大熊座80 · 輔星 Alcor",ra:13.419,dec:54.988,mag:3.99,bv:.16,hip:65477},{name:"大熊座η · 搖光 (北斗七) Alkaid",ra:13.792,dec:49.313,mag:1.85,bv:-.1,hip:67301},{name:"大熊座θ · 文昌四",ra:9.549,dec:51.68,mag:3.17,bv:.4,hip:46853},{name:"大熊座ι · 上台一 Talitha",ra:8.986,dec:48.042,mag:3.12,bv:.2,hip:44127},{name:"大熊座μ · 中台一 Tania Australis",ra:10.373,dec:41.499,mag:3.06,bv:1.58,hip:50801},{name:"大熊座ν · 下台一 Alula Borealis",ra:11.311,dec:33.094,mag:3.49,bv:1.39,hip:55219},{name:"大熊座ξ · 下台二 Alula Australis",ra:11.305,dec:31.53,mag:3.79,bv:.59,hip:55203},{name:"仙后座α · 王良四 Schedar",ra:.675,dec:56.537,mag:2.24,bv:1.17,hip:3179},{name:"仙后座β · 王良一 Caph",ra:.153,dec:59.15,mag:2.28,bv:.34,hip:746},{name:"仙后座γ · 策 Navi",ra:.945,dec:60.717,mag:2.15,bv:-.15,hip:4427},{name:"仙后座δ · 閣道四 Ruchbah",ra:1.429,dec:60.235,mag:2.66,bv:.13,hip:6686},{name:"仙后座ε · 閣道二 Segin",ra:1.905,dec:63.67,mag:3.35,bv:-.15,hip:8886},{name:"仙后座η · 閣道三 Achird",ra:.818,dec:57.815,mag:3.46,bv:.58,hip:3821},{name:"小熊座β · 帝星 Kochab",ra:14.845,dec:74.156,mag:2.07,bv:1.47,hip:72607},{name:"小熊座γ · 太子 Pherkad",ra:15.346,dec:71.834,mag:3,bv:.05,hip:75097},{name:"小熊座δ · 勾陳二 Yildun",ra:17.537,dec:86.586,mag:4.35,bv:.02,hip:85822},{name:"仙女座α · 壁宿二 Alpheratz",ra:.139,dec:29.09,mag:2.07,bv:-.04,hip:677},{name:"仙女座β · 奎宿九 Mirach",ra:1.162,dec:35.621,mag:2.07,bv:1.58,hip:5447},{name:"仙女座γ · 天大將軍一 Almach",ra:2.065,dec:42.332,mag:2.1,bv:1.37,hip:9640},{name:"仙女座δ · 奎宿七",ra:.656,dec:30.861,mag:3.27,bv:1.28,hip:3092},{name:"仙女座μ · 奎宿八 (M31旁)",ra:.945,dec:38.499,mag:3.86,bv:.29,hip:4436},{name:"仙女座ν · 奎宿七 (M31旁)",ra:.829,dec:41.082,mag:4.53,bv:-.09,hip:3881},{name:"飛馬座α · 室宿一 Markab",ra:23.079,dec:15.205,mag:2.49,bv:-.04,hip:113963},{name:"飛馬座β · 室宿二 Scheat",ra:23.063,dec:28.083,mag:2.44,bv:1.65,hip:113881},{name:"飛馬座γ · 壁宿一 Algenib",ra:.221,dec:15.183,mag:2.84,bv:-.19,hip:1067},{name:"飛馬座ε · 危宿三 Enif",ra:21.736,dec:9.875,mag:2.38,bv:1.53,hip:107315},{name:"飛馬座η · 離宮四 Matar",ra:22.717,dec:30.221,mag:2.93,bv:.85,hip:112158},{name:"飛馬座ζ · 雷電一 Homam",ra:22.69,dec:10.831,mag:3.41,bv:-.09,hip:112029},{name:"金牛座ζ · 天關 (M1旁) Tianguan",ra:5.627,dec:21.143,mag:2.97,bv:-.19,hip:26451},{name:"金牛座η · 昴宿六 (七姊妹主星) Alcyone",ra:3.791,dec:24.105,mag:2.85,bv:-.09,hip:17702},{name:"金牛座27 · 昴宿七 Atlas",ra:3.821,dec:24.053,mag:3.62,bv:-.09,hip:17847},{name:"金牛座17 · 昴宿一 Electra",ra:3.748,dec:24.11,mag:3.72,bv:-.11,hip:17499},{name:"金牛座20 · 昴宿二 Maia",ra:3.763,dec:24.368,mag:3.87,bv:-.07,hip:17573},{name:"金牛座23 · 昴宿五 Merope",ra:3.774,dec:23.948,mag:4.14,bv:-.07,hip:17608},{name:"金牛座λ · 畢宿八",ra:4.011,dec:12.49,mag:3.41,bv:-.12,hip:18724},{name:"金牛座θ2 · 畢宿六 Chamukuy",ra:4.477,dec:15.992,mag:3.4,bv:.16,hip:20894},{name:"英仙座α · 天船三 Mirfak",ra:3.405,dec:49.861,mag:1.79,bv:.48,hip:15863},{name:"英仙座β · 大陵五 (著名食變星) Algol",ra:3.136,dec:40.957,mag:2.09,bv:-.05,hip:14576},{name:"英仙座ζ · 卷舌四 Menkib",ra:3.902,dec:31.883,mag:2.84,bv:.33,hip:18246},{name:"英仙座ε · 卷舌二",ra:3.964,dec:40.01,mag:2.9,bv:-.18,hip:18532},{name:"英仙座γ · 天船二",ra:3.079,dec:53.506,mag:2.91,bv:.7,hip:14328},{name:"雙子座γ · 井宿三 Alhena",ra:6.628,dec:16.399,mag:1.93,bv:0,hip:31681},{name:"雙子座μ · 井宿一 Tejat",ra:6.383,dec:22.514,mag:2.87,bv:1.64,hip:30343},{name:"雙子座η · 鉞 (M35旁) Propus",ra:6.248,dec:22.506,mag:3.31,bv:1.59,hip:29655},{name:"雙子座δ · 井宿五 Wasat",ra:7.335,dec:21.982,mag:3.5,bv:.35,hip:35550},{name:"雙子座ε · 井宿八 Mebsuta",ra:6.732,dec:25.131,mag:3.06,bv:1.4,hip:32246},{name:"御夫座β · 五車三 Menkalinan",ra:5.993,dec:44.947,mag:1.9,bv:.03,hip:28360},{name:"御夫座θ · 五車四 Mahasim",ra:5.996,dec:37.214,mag:2.65,bv:.07,hip:28380},{name:"御夫座ι · 五車一 Hassaleh",ra:4.949,dec:33.166,mag:2.69,bv:1.3,hip:23015},{name:"御夫座ε · 柱一 Almaaz",ra:5.033,dec:43.823,mag:3.03,bv:.28,hip:23416},{name:"御夫座η · 柱三 Haedus II",ra:5.108,dec:41.235,mag:3.18,bv:-.18,hip:23767},{name:"天琴座β · 漸台二 (M57旁) Sheliak",ra:18.835,dec:33.363,mag:3.52,bv:-.05,hip:92420},{name:"天琴座γ · 漸台三 (M57旁) Sulafat",ra:18.982,dec:32.69,mag:3.25,bv:-.05,hip:93194},{name:"天琴座ε1 · 織女雙雙星 Epsilon 1",ra:18.739,dec:39.67,mag:4.67,bv:.07,hip:91919},{name:"天琴座δ2 · 漸台一",ra:18.909,dec:36.899,mag:4.22,bv:1.35,hip:92791},{name:"天鷹座γ · 河鼓一 Tarazed",ra:19.771,dec:10.613,mag:2.72,bv:1.52,hip:97278},{name:"天鷹座β · 河鼓三 Alshain",ra:19.922,dec:6.407,mag:3.71,bv:.86,hip:98036},{name:"天鷹座ζ · 天市左垣六 Okab",ra:19.09,dec:13.864,mag:2.99,bv:-.01,hip:93747},{name:"天鷹座θ · 天桴一",ra:20.187,dec:-.819,mag:3.24,bv:-.08,hip:99473},{name:"天鵝座γ · 天津九 Sadr",ra:20.37,dec:40.257,mag:2.23,bv:.68,hip:100453},{name:"天鵝座ε · 天津九 Gienah",ra:20.77,dec:33.97,mag:2.48,bv:1.03,hip:102488},{name:"天鵝座δ · 天津二 Fawaris",ra:19.749,dec:45.131,mag:2.86,bv:-.03,hip:97165},{name:"天鵝座β · 輦道增七 (金藍雙星) Albireo",ra:19.512,dec:27.96,mag:3.05,bv:1.13,hip:95947},{name:"天鵝座ζ · 車府增一",ra:21.215,dec:30.227,mag:3.21,bv:.98,hip:104732},{name:"天蠍座β · 房宿四 Acrab",ra:16.09,dec:-19.805,mag:2.56,bv:-.08,hip:78820},{name:"天蠍座δ · 房宿三 Dschubba",ra:16.006,dec:-22.622,mag:2.29,bv:-.13,hip:78401},{name:"天蠍座θ · 尾宿五 Sargas",ra:17.622,dec:-42.998,mag:1.86,bv:.4,hip:86228},{name:"天蠍座κ · 尾宿七 Girtab",ra:17.708,dec:-39.03,mag:2.39,bv:-.22,hip:86670},{name:"天蠍座ε · 尾宿二 Larawag",ra:16.837,dec:-34.293,mag:2.29,bv:1.15,hip:82396},{name:"天蠍座τ · 心宿三 Paikauhale",ra:16.598,dec:-28.216,mag:2.82,bv:-.25,hip:81266},{name:"天蠍座σ · 心宿一 Alniyat",ra:16.353,dec:-25.59,mag:2.89,bv:-.04,hip:80112},{name:"人馬座ε · 箕宿三 (茶壺底) Kaus Australis",ra:18.403,dec:-34.384,mag:1.79,bv:-.03,hip:90185},{name:"人馬座σ · 斗宿四 Nunki",ra:18.921,dec:-26.297,mag:2.05,bv:-.22,hip:92855},{name:"人馬座ζ · 斗宿六 Ascella",ra:19.044,dec:-29.88,mag:2.6,bv:.06,hip:93506},{name:"人馬座δ · 箕宿二 (茶壺嘴) Kaus Media",ra:18.349,dec:-29.828,mag:2.72,bv:1.38,hip:89931},{name:"人馬座λ · 斗宿二 (茶壺蓋) Kaus Borealis",ra:18.466,dec:-25.421,mag:2.82,bv:1.02,hip:90496},{name:"人馬座γ · 箕宿一 Alnasl",ra:18.096,dec:-30.424,mag:2.98,bv:1.03,hip:88635},{name:"人馬座π · 建三 Albaldah",ra:19.164,dec:-21.026,mag:2.88,bv:.35,hip:94141},{name:"人馬座η · 箕宿增一",ra:18.293,dec:-36.762,mag:3.1,bv:1.56,hip:89642},{name:"獅子座γ · 軒轅十二 Algieba",ra:10.333,dec:19.842,mag:2.01,bv:1.15,hip:50583},{name:"獅子座β · 五帝座一 Denebola",ra:11.818,dec:14.572,mag:2.14,bv:.09,hip:57632},{name:"獅子座δ · 太微右垣五 Zosma",ra:11.235,dec:20.524,mag:2.56,bv:.12,hip:54872},{name:"獅子座θ · 太微右垣四 Chertan",ra:11.237,dec:15.432,mag:3.33,bv:.12,hip:54879},{name:"室女座γ · 東次相 Porrima",ra:12.694,dec:-1.449,mag:2.74,bv:.36,hip:61941},{name:"室女座ε · 左執法 Vindemiatrix",ra:13.036,dec:10.959,mag:2.85,bv:.94,hip:63608},{name:"室女座β · 右執法 Zavijava",ra:11.844,dec:1.765,mag:3.59,bv:.55,hip:57757},{name:"牧夫座ε · 梗河一 Izar",ra:14.75,dec:27.074,mag:2.35,bv:.97,hip:72105},{name:"牧夫座η · 左攝提一 Muphrid",ra:13.911,dec:18.397,mag:2.68,bv:.58,hip:67927},{name:"牧夫座γ · 招搖 Seginus",ra:14.535,dec:38.308,mag:3.04,bv:.19,hip:71075},{name:"武仙座β · 天紀二 Kornephoros",ra:16.503,dec:21.483,mag:2.78,bv:.85,hip:80816},{name:"武仙座ζ · 天紀三 (M13旁)",ra:16.687,dec:31.603,mag:2.81,bv:.44,hip:81693},{name:"武仙座α · 帝座 Rasalgethi",ra:17.245,dec:14.39,mag:3.13,bv:1.45,hip:84345},{name:"北冕座α · 貫索四 Alphecca",ra:15.578,dec:26.715,mag:2.22,bv:.07,hip:76267},{name:"大犬座δ · 弧矢七 Wezen",ra:7.14,dec:-26.393,mag:1.83,bv:.67,hip:34444},{name:"大犬座β · 軍市一 Mirzam",ra:6.378,dec:-17.956,mag:1.98,bv:-.24,hip:30324},{name:"大犬座η · 弧矢二 Aludra",ra:7.402,dec:-29.303,mag:2.45,bv:-.07,hip:36188},{name:"白羊座α · 婁宿三 Hamal",ra:2.12,dec:23.462,mag:2.01,bv:1.15,hip:9884},{name:"白羊座β · 婁宿一 Sheratan",ra:1.911,dec:20.808,mag:2.64,bv:.14,hip:8903},{name:"鯨魚座β · 土司空 Diphda",ra:.726,dec:-17.987,mag:2.04,bv:1.02,hip:3419},{name:"鯨魚座α · 天囷一 Menkar",ra:3.038,dec:4.09,mag:2.54,bv:1.64,hip:14146},{name:"長蛇座α · 星宿一 Alphard",ra:9.46,dec:-8.658,mag:1.99,bv:1.44,hip:46390},{name:"仙王座α · 少衛增八 Alderamin",ra:21.31,dec:62.585,mag:2.45,bv:.22,hip:105199},{name:"仙王座β · 上衛增一 Alfirk",ra:21.479,dec:70.561,mag:3.23,bv:-.22,hip:106032},{name:"仙王座γ · 少衛一 Errai",ra:23.656,dec:77.632,mag:3.21,bv:1.03,hip:116727},{name:"仙王座μ · 造父四 (赫歇爾石榴星)",ra:21.725,dec:58.78,mag:4.08,bv:2.35,hip:107259},{name:"天兔座α · 廁一 Arneb",ra:5.545,dec:-17.822,mag:2.58,bv:.21,hip:25985},{name:"天兔座β · 廁二 Nihal",ra:5.47,dec:-20.76,mag:2.81,bv:.82,hip:25606},{name:"天秤座α · 氐宿一 Zubenelgenubi",ra:14.848,dec:-16.042,mag:2.75,bv:.15,hip:72622},{name:"天秤座β · 氐宿四 Zubeneschamali",ra:15.283,dec:-9.383,mag:2.61,bv:-.11,hip:74785},{name:"蛇夫座α · 候 Rasalhague",ra:17.582,dec:12.56,mag:2.08,bv:.15,hip:86032},{name:"蛇夫座η · 宋 Sabik",ra:17.173,dec:-15.725,mag:2.43,bv:.09,hip:84012},{name:"船尾座ζ · 弧矢增二十二 Naos",ra:8.06,dec:-40.003,mag:2.21,bv:-.27,hip:39429},{name:"船底座ε · 海石一 Avior",ra:8.375,dec:-59.509,mag:1.86,bv:1.2,hip:41037},{name:"船底座β · 南船二 Miaplacidus",ra:9.222,dec:-69.717,mag:1.67,bv:0,hip:45238}];function zm(s){let e=4600*(1/(.92*s+1.7)+1/(.92*s+.62));e=Math.max(1e3,Math.min(4e4,e));const t=e/100;let n,i,a;return t<=66?n=255:n=329.698727446*Math.pow(t-60,-.1332047592),t<=66?i=99.4708025861*Math.log(t)-161.1195681661:i=288.1221695283*Math.pow(t-60,-.0755148492),t>=66?a=255:t<=19?a=0:a=138.5177312231*Math.log(t-10)-305.0447927307,[Math.max(0,Math.min(255,n))/255,Math.max(0,Math.min(255,i))/255,Math.max(0,Math.min(255,a))/255]}function Vm(s,e){const t=Math.PI/180,n=s*t,i=e*t,a=192.85948*t,r=27.12825*t,o=32.93192*t,l=Math.sin(r)*Math.sin(i)+Math.cos(r)*Math.cos(i)*Math.cos(n-o),c=Math.asin(Math.max(-1,Math.min(1,l))),h=Math.cos(i)*Math.sin(n-o),d=Math.cos(r)*Math.sin(i)-Math.sin(r)*Math.cos(i)*Math.cos(n-o);let u=(a+Math.atan2(h,d))/t;return u<0&&(u+=360),u>=360&&(u-=360),{ra:u/15,dec:c/t}}function Gm(s=45e3,e=42){const t=[];let n=e;const i=()=>{n|=0,n=n+1831565813|0;let l=Math.imul(n^n>>>15,1|n);return l=l+Math.imul(l^l>>>7,61|l)^l,((l^l>>>14)>>>0)/4294967296},a=()=>{const l=Math.max(1e-7,i()),c=i();return Math.sqrt(-2*Math.log(l))*Math.cos(2*Math.PI*c)},r=Math.floor(s*.65);for(let l=0;l<r;l++){let c,h;const d=i();d<.4?(c=(a()*24+360)%360,h=a()*4.5):d<.65?(c=(a()*18+78+360)%360,h=a()*5.5):d<.85?(c=(a()*25+195+360)%360,h=a()*6.5):(c=i()*360,h=a()*(i()<.6?4:9.5));const u=Vm(c,h);let p;d<.05?p=3.8+Math.pow(i(),.7)*1.2:p=5.2+Math.pow(i(),.6)*9.6;const g=-.25+i()*1.85;t.push({name:"",ra:u.ra,dec:u.dec,mag:p,bv:g})}const o=s-r;for(let l=0;l<o;l++){const c=i()*24,h=Math.asin(2*i()-1)*(180/Math.PI),d=i();let u;d<.08?u=3.5+Math.pow(i(),.75)*1.5:u=5.2+Math.pow(i(),.65)*9.6;const p=-.3+i()*2.1;t.push({name:"",ra:c,dec:h,mag:u,bv:p})}return t}class Hm{constructor(e){this.points=null,this.material=null,this.geometry=null,this.scene=e,this.group=new zt,this.scene.add(this.group)}async loadStars(){let e=[],t=!0;try{const h=await fetch("/stars.bin");if(h.ok){const d=await h.arrayBuffer(),u=new Float32Array(d),p=u.length/8;e=new Array(p);for(let g=0;g<p;g++){const v=g*8;e[g]={x:u[v],y:u[v+1],z:u[v+2],r:u[v+3],g:u[v+4],b:u[v+5],mag:u[v+6]}}t=!1}}catch(h){console.warn("Failed to load stars.bin, using fallback",h)}t&&(e=[...Zl,...Gm(45e3)].map(h=>{const u=h.ra*Math.PI/12,p=h.dec*Math.PI/180,g=1e3*Math.cos(p)*Math.cos(u),v=1e3*Math.sin(p),m=1e3*Math.cos(p)*Math.sin(u),[f,T,E]=zm(h.bv);return{x:g,y:v,z:m,r:f,g:T,b:E,mag:h.mag}}));const n=e.length,i=new Float32Array(n*3),a=new Float32Array(n*3),r=new Float32Array(n),o=new Float32Array(n);for(let h=0;h<n;h++){const d=e[h];i[h*3]=d.x,i[h*3+1]=d.y,i[h*3+2]=d.z,a[h*3]=d.r,a[h*3+1]=d.g,a[h*3+2]=d.b,r[h]=d.mag,o[h]=Math.random()*2.5+.5}this.geometry=new xt,this.geometry.setAttribute("position",new _t(i,3)),this.geometry.setAttribute("aColor",new _t(a,3)),this.geometry.setAttribute("aMagnitude",new _t(r,1)),this.geometry.setAttribute("aTwinkleSpeed",new _t(o,1));const l=`
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
        `;this.material=new ft({vertexShader:l,fragmentShader:c,uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio||1,2)},uBaseSize:{value:5.2},uCurrentFov:{value:60},uMinFov:{value:.2},uSunElevation:{value:-.2},uLimitingMagnitude:{value:6.5}},transparent:!0,blending:Ti,depthWrite:!1}),this.points=new Yl(this.geometry,this.material),this.group.add(this.points)}update(e,t,n,i=6.5){this.material&&(this.material.uniforms.uTime.value=e,this.material.uniforms.uCurrentFov.value=t,this.material.uniforms.uSunElevation.value=n,this.material.uniforms.uLimitingMagnitude.value=i)}setVisible(e){this.group.visible=e}getStarGroup(){return this.group}dispose(){this.geometry&&this.geometry.dispose(),this.material&&this.material.dispose(),this.points&&this.group.remove(this.points),this.scene.remove(this.group)}}class Wm{constructor(e){this.scene=e,this.group=new zt,this.scene.add(this.group)}updateOrientation(e,t,n){const r=(18.697374558+24.06570982441908*(n.getTime()/864e5+24405875e-1-2451545))%24,l=((r<0?r+24:r)+t/15)%24,h=(l<0?l+24:l)*Math.PI/12,d=e*Math.PI/180;this.group.rotation.set(0,0,0),this.group.setRotationFromEuler(new Vt(Math.PI/2-d,0,-h,"ZXY"))}getRaDecToVector(e,t){const i=e*Math.PI/12,a=t*Math.PI/180,r=1e3*Math.cos(a)*Math.cos(i),o=1e3*Math.sin(a),l=1e3*Math.cos(a)*Math.sin(i);return new R(r,o,l)}vectorToRaDec(e){const t=e.clone().normalize(),n=this.group.matrixWorld.clone().invert();t.applyMatrix4(n);const i=Math.asin(Math.max(-1,Math.min(1,t.y)))*180/Math.PI;let a=Math.atan2(t.z,t.x)*12/Math.PI;return a<0&&(a+=24),{ra:a,dec:i}}getHorizontalVector(e,t){const n=e*Math.PI/180,i=t*Math.PI/180,a=Math.cos(i),r=a*Math.sin(n),o=Math.sin(i),l=-a*Math.cos(n);return new R(r,o,l)}raDecToScreenPosition(e,t,n,i,a){const r=this.getRaDecToVector(e,t);if(r.applyMatrix4(this.group.matrixWorld),r.project(n),r.z>1)return null;const o=(r.x*.5+.5)*i,l=(r.y*-.5+.5)*a;return new Ae(o,l)}dispose(){this.scene.remove(this.group)}}const Xm=[{name:"Orion",nameZh:"獵戶座",lines:[[5.92,7.407,5.419,6.35],[5.242,-8.202,5.796,-9.67],[5.533,-.299,5.604,-1.202],[5.604,-1.202,5.679,-1.943],[5.92,7.407,5.604,-1.202],[5.419,6.35,5.533,-.299],[5.679,-1.943,5.796,-9.67],[5.533,-.299,5.242,-8.202]]},{name:"Ursa Major",nameZh:"大熊座（北斗七星）",lines:[[11.062,61.751,11.031,56.382],[11.031,56.382,11.897,53.695],[11.897,53.695,12.257,57.033],[12.257,57.033,12.9,55.96],[12.9,55.96,13.399,54.926],[13.399,54.926,13.792,49.313],[11.062,61.751,12.257,57.033]]},{name:"Cassiopeia",nameZh:"仙后座",lines:[[.153,59.15,.675,56.537],[.675,56.537,.945,60.717],[.945,60.717,1.43,60.235],[1.43,60.235,1.907,63.67]]},{name:"Scorpius",nameZh:"天蠍座",lines:[[16.005,-22.622,16.09,-20.669],[16.09,-20.669,16.353,-25.593],[16.005,-22.622,16.49,-26.432],[16.49,-26.432,16.836,-34.293],[16.836,-34.293,17.203,-43.239],[17.203,-43.239,17.56,-37.104],[17.56,-37.104,17.622,-42.998]]},{name:"Leo",nameZh:"獅子座",lines:[[10.14,11.967,10.333,19.842],[10.333,19.842,10.278,23.417],[10.278,23.417,9.879,26.007],[9.879,26.007,9.764,23.774],[10.278,23.417,11.237,20.524],[11.237,20.524,11.818,14.572],[10.14,11.967,11.237,20.524]]},{name:"Cygnus",nameZh:"天鵝座",lines:[[20.69,45.28,20.37,40.257],[20.37,40.257,19.749,45.131],[20.37,40.257,20.77,33.97],[20.37,40.257,19.512,27.96]]},{name:"Lyra",nameZh:"天琴座",lines:[[18.616,38.784,18.835,33.363],[18.835,33.363,18.982,32.69],[18.982,32.69,18.746,37.605],[18.746,37.605,18.616,38.784]]},{name:"Aquila",nameZh:"天鷹座",lines:[[19.771,10.613,19.846,8.868],[19.846,8.868,19.922,6.407]]},{name:"Gemini",nameZh:"雙子座",lines:[[7.577,31.888,7.755,28.026],[7.577,31.888,6.629,25.131],[7.755,28.026,7.068,20.57],[6.629,25.131,6.382,22.514],[6.382,22.514,6.248,22.507]]},{name:"Canis Major",nameZh:"大犬座",lines:[[6.752,-16.716,6.378,-17.956],[6.752,-16.716,6.977,-28.972],[6.977,-28.972,7.14,-26.393],[7.14,-26.393,7.029,-23.833]]},{name:"Taurus",nameZh:"金牛座",lines:[[4.599,16.509,4.477,15.962],[4.477,15.962,4.33,15.628],[4.33,15.628,4.382,17.543],[4.382,17.543,4.477,15.962],[4.599,16.509,5.438,28.608],[4.599,16.509,5.627,21.143]]},{name:"Perseus",nameZh:"英仙座",lines:[[3.405,49.861,3.136,40.957],[3.405,49.861,3.715,47.788],[3.715,47.788,3.964,40.01],[3.136,40.957,2.844,38.319]]},{name:"Crux",nameZh:"南十字座",lines:[[12.443,-63.099,12.519,-57.113],[12.795,-59.689,12.252,-58.749]]},{name:"Centaurus",nameZh:"半人馬座",lines:[[14.661,-60.835,14.064,-60.373]]},{name:"Bootes",nameZh:"牧夫座",lines:[[14.261,19.182,14.535,30.371],[14.535,30.371,15.032,40.39],[15.032,40.39,14.686,38.308],[14.686,38.308,14.261,19.182]]},{name:"Ursa Minor",nameZh:"小熊座",lines:[[2.53,89.264,17.537,86.586],[17.537,86.586,16.292,75.755],[16.292,75.755,15.734,77.795]]},{name:"Virgo",nameZh:"室女座",lines:[[13.42,-11.161,13.036,-5.539],[13.036,-5.539,12.694,-1.449],[12.694,-1.449,12.332,-.667],[13.036,-5.539,12.927,3.397]]},{name:"Pegasus",nameZh:"飛馬座",lines:[[.22,15.184,23.063,28.083],[23.063,28.083,23.079,15.205],[23.079,15.205,.22,15.184],[23.063,28.083,22.717,30.221],[22.717,30.221,.22,15.184]]},{name:"Sagittarius",nameZh:"人馬座",lines:[[18.921,-26.297,19.043,-29.88],[18.35,-29.828,18.921,-26.297],[18.35,-29.828,18.466,-25.422],[18.466,-25.422,18.921,-26.297],[19.043,-29.88,18.35,-29.828]]},{name:"Andromeda",nameZh:"仙女座",lines:[[.22,15.184,.656,29.091],[.656,29.091,1.163,35.621],[1.163,35.621,2.065,42.33]]}];class qm{constructor(e){this.lines=null,this.material=null,this.geometry=null,this.group=new zt,e.add(this.group),this.init()}init(){const t=[];for(const a of Xm)for(const r of a.lines){const o=r[0]*Math.PI/12,l=r[1]*Math.PI/180,c=r[2]*Math.PI/12,h=r[3]*Math.PI/180;t.push(999*Math.cos(l)*Math.cos(o),999*Math.sin(l),999*Math.cos(l)*Math.sin(o),999*Math.cos(h)*Math.cos(c),999*Math.sin(h),999*Math.cos(h)*Math.sin(c))}this.geometry=new xt,this.geometry.setAttribute("position",new ct(t,3));const n=`
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
        `;this.material=new ft({vertexShader:n,fragmentShader:i,uniforms:{uColor:{value:new Ue(3718648)},uOpacity:{value:.18}},transparent:!0,depthWrite:!1}),this.lines=new wm(this.geometry,this.material),this.group.add(this.lines)}update(e){if(!this.material)return;const t=Math.max(0,Math.min(1,-e/.08));this.material.uniforms.uOpacity.value=.18*t,this.group.visible=this.material.uniforms.uOpacity.value>.001}setVisible(e){this.group.visible=e}dispose(){this.geometry&&this.geometry.dispose(),this.material&&this.material.dispose(),this.lines&&this.group.remove(this.lines),this.group.parent&&this.group.parent.remove(this.group)}}const In=[{id:"M31",name:"M31",commonName:"仙女座星系 Andromeda Galaxy",ra:.712,dec:41.269,magnitude:3.4,type:"galaxy",sizeArcmin:178,difficulty:1,basePrice:200,starHoppingGuide:"先在東北方找到大大的「W 形仙后座」，順著中間頂點（策星）向右下方延伸約兩個星座寬度；或從飛馬座大四邊形東側向上沿仙女座星脊找到奎宿九，再往西北偏北移動 2 度。"},{id:"M33",name:"M33",commonName:"三角座星系 Triangulum Galaxy",ra:1.564,dec:30.66,magnitude:5.7,type:"galaxy",sizeArcmin:73,difficulty:3,basePrice:300,starHoppingGuide:"從仙女座奎宿九出發，朝向白羊座最亮星「婁宿三」方向直線移動，位於兩星連線的中點稍偏南。"},{id:"M51",name:"M51",commonName:"渦狀星系 Whirlpool Galaxy",ra:13.5,dec:47.195,magnitude:8.4,type:"galaxy",sizeArcmin:11,difficulty:3,basePrice:350,starHoppingGuide:"先找到北斗七星勺柄末端的最後一顆星「搖光星（大熊座 Eta）」，往西南偏西方向移動約 3.5 度（約 7 個滿月寬度）。"},{id:"M81",name:"M81",commonName:"波德星系 Bode's Galaxy",ra:9.926,dec:69.065,magnitude:6.9,type:"galaxy",sizeArcmin:27,difficulty:2,basePrice:250,starHoppingGuide:"從北斗七星勺身左下角的「天璇星」連線至右上角的「天樞星」，順著連線方向向外延伸相同距離，即可到達大熊座頭部上方的 M81 與 M82。"},{id:"M82",name:"M82",commonName:"雪茄星系 Cigar Galaxy",ra:9.932,dec:69.68,magnitude:8.4,type:"galaxy",sizeArcmin:11,difficulty:3,basePrice:300,starHoppingGuide:"緊鄰 M81 波德星系北側約 0.6 度（不到一個視野距離），側向看過去呈細長雪茄狀。"},{id:"M104",name:"M104",commonName:"草帽星系 Sombrero Galaxy",ra:12.667,dec:-11.623,magnitude:8,type:"galaxy",sizeArcmin:9,difficulty:4,basePrice:400,starHoppingGuide:"先找到室女座最亮星「角宿一」與烏鴉座四邊形右上角的「軫宿一」，M104 位於烏鴉座上方、兩星連線偏北側約 5.5 度處。"},{id:"M101",name:"M101",commonName:"風車星系 Pinwheel Galaxy",ra:14.054,dec:54.349,magnitude:7.9,type:"galaxy",sizeArcmin:29,difficulty:4,basePrice:350,starHoppingGuide:"位於北斗七星勺柄末端兩顆星（開陽星與搖光星）之間，以這兩顆星為底邊，往東北方向構成一個正三角形頂點。"},{id:"M42",name:"M42",commonName:"獵戶座大星雲 Orion Nebula",ra:5.588,dec:-5.391,magnitude:4,type:"nebula",sizeArcmin:85,difficulty:1,basePrice:180,starHoppingGuide:"先找到東南方最耀眼的「獵戶座腰帶三星（參宿一、參宿二、參宿三）」，朝正下方佩劍方向垂直看三顆微弱小星，中間那顆微光就是 M42！"},{id:"M43",name:"M43",commonName:"獵戶座星雲 (北部) De Mairan's Nebula",ra:5.593,dec:-5.268,magnitude:9,type:"nebula",sizeArcmin:20,difficulty:2,basePrice:150,starHoppingGuide:"直接對準 M42 獵戶座大星雲，在主雲氣正北側（正上方）被一條暗黑塵埃帶隔開的逗點狀星雲即是 M43。"},{id:"M78",name:"M78",commonName:"獵戶座反射星雲",ra:5.779,dec:.081,magnitude:8.3,type:"nebula",sizeArcmin:8,difficulty:3,basePrice:250,starHoppingGuide:"從獵戶座腰帶最左側的「參宿一」出發，朝向右上方的「參宿四（紅超巨星）」連線方向移動約 2.5 度處。"},{id:"M8",name:"M8",commonName:"礁湖星雲 Lagoon Nebula",ra:18.063,dec:-24.384,magnitude:6,type:"nebula",sizeArcmin:90,difficulty:1,basePrice:200,starHoppingGuide:"在南方銀河中找到人馬座「茶壺」造型，從茶壺嘴的「箕宿二」向上往銀河中心方向移動約 5 度即可看見大片雲氣。"},{id:"M17",name:"M17",commonName:"天鵝星雲 Omega Nebula",ra:18.346,dec:-16.175,magnitude:6,type:"nebula",sizeArcmin:46,difficulty:2,basePrice:220,starHoppingGuide:"沿著人馬座茶壺頂部蓋子「斗宿二」向上延伸約 12 度，位於人馬座與盾牌座交界處的銀河密集區。"},{id:"M20",name:"M20",commonName:"三裂星雲 Trifid Nebula",ra:18.043,dec:-23.028,magnitude:6.3,type:"nebula",sizeArcmin:28,difficulty:2,basePrice:250,starHoppingGuide:"位於 M8 礁湖星雲的正北方僅 1.4 度處（同一個雙筒望遠鏡視野內），由紅藍雙色三道暗黑塵埃帶裂開。"},{id:"M16",name:"M16",commonName:"鷹星雲 Eagle Nebula",ra:18.314,dec:-13.793,magnitude:6,type:"nebula",sizeArcmin:35,difficulty:2,basePrice:280,starHoppingGuide:"在巨蛇座尾部，緊鄰 M17 天鵝星雲北側約 2.5 度處（著名的創生之柱所在之處）。"},{id:"M1",name:"M1",commonName:"蟹狀星雲 Crab Nebula",ra:5.576,dec:22.015,magnitude:8.4,type:"nebula",sizeArcmin:7,difficulty:3,basePrice:350,starHoppingGuide:"先找到金牛座南側長角的尖端亮星「天關星（金牛座 Zeta）」，往西北方向微調約 1 度（兩顆滿月距離）。"},{id:"M57",name:"M57",commonName:"環狀星雲 Ring Nebula",ra:18.893,dec:33.029,magnitude:8.8,type:"planetary_nebula",sizeArcmin:1.4,difficulty:2,basePrice:300,starHoppingGuide:"先找到天琴座超亮「織女星」，朝南看到平行四邊形底部的兩顆星「漸台二」與「漸台三」，M57 就位於這兩星連線的正中點。"},{id:"M27",name:"M27",commonName:"啞鈴星雲 Dumbbell Nebula",ra:19.993,dec:22.721,magnitude:7.5,type:"planetary_nebula",sizeArcmin:8,difficulty:2,basePrice:280,starHoppingGuide:"在夏夜大三角的天鵝座天津四與天鷹座牛郎星連線中點偏東處，位於狐狸座中心、天箭座箭尖正上方約 3 度。"},{id:"M97",name:"M97",commonName:"貓頭鷹星雲 Owl Nebula",ra:11.248,dec:55.019,magnitude:9.9,type:"planetary_nebula",sizeArcmin:3.4,difficulty:4,basePrice:400,starHoppingGuide:"從北斗七星勺底的「天璇星」往東南向「天璣星」方向移動約 2.3 度處。"},{id:"M45",name:"M45",commonName:"昴宿星團 Pleiades",ra:3.791,dec:24.105,magnitude:1.6,type:"cluster",sizeArcmin:110,difficulty:1,basePrice:150,starHoppingGuide:"肉眼可見！先找到金牛座紅巨星「畢宿五」，往西北方向約 14 度，即可看見一小撮像微縮北斗七星的七姊妹藍白星群。"},{id:"M44",name:"M44",commonName:"蜂巢星團 Beehive Cluster",ra:8.667,dec:19.669,magnitude:3.7,type:"cluster",sizeArcmin:95,difficulty:1,basePrice:120,starHoppingGuide:"位於雙子座雙子星與獅子座軒轅十四連線的正中點，巨蟹座四顆暗星包圍的中心。"},{id:"M35",name:"M35",commonName:"雙子座疏散星團",ra:6.148,dec:24.333,magnitude:5.3,type:"cluster",sizeArcmin:28,difficulty:2,basePrice:130,starHoppingGuide:"在雙子座哥哥「卡斯托爾」的右腳尖「鉞星（雙子座 Eta）」西北方約 2.5 度處。"},{id:"M11",name:"M11",commonName:"野鴨星團 Wild Duck Cluster",ra:18.851,dec:-6.267,magnitude:6.3,type:"cluster",sizeArcmin:14,difficulty:2,basePrice:160,starHoppingGuide:"在天鷹座牛郎星向西南方延伸的銀河暗帶中，盾牌座四邊形頂部。"},{id:"M13",name:"M13",commonName:"武仙座球狀星團 Great Hercules Cluster",ra:16.695,dec:36.462,magnitude:5.8,type:"cluster",sizeArcmin:20,difficulty:1,basePrice:180,starHoppingGuide:"先找到武仙座「拱頂四邊形」，在西側兩星（天紀二與天紀三）連線偏北三分之二處，是一團由數十萬顆恆星組成的球狀星團。"},{id:"M3",name:"M3",commonName:"獵犬座球狀星團",ra:13.703,dec:28.377,magnitude:6.2,type:"cluster",sizeArcmin:18,difficulty:2,basePrice:170,starHoppingGuide:"位於牧夫座超亮紅巨星「大角星」與獵犬座常陳一連線的正中點。"},{id:"M5",name:"M5",commonName:"巨蛇座球狀星團",ra:15.31,dec:2.083,magnitude:5.7,type:"cluster",sizeArcmin:23,difficulty:2,basePrice:170,starHoppingGuide:"從室女座角宿一往東偏北找到室女座東側邊界，位於巨蛇座頭部天市右垣七西南方約 8 度。"},{id:"M15",name:"M15",commonName:"飛馬座球狀星團",ra:21.5,dec:12.167,magnitude:6.2,type:"cluster",sizeArcmin:18,difficulty:2,basePrice:165,starHoppingGuide:"從飛馬座大四邊形西南角的室宿一出發，穿過飛馬座鼻尖的危宿三，向前直線延伸約 4 度。"},{id:"M22",name:"M22",commonName:"人馬座球狀星團",ra:18.607,dec:-23.905,magnitude:5.1,type:"cluster",sizeArcmin:32,difficulty:1,basePrice:160,starHoppingGuide:"位於人馬座茶壺蓋頂部「斗宿二」往東北偏東方向僅 2.5 度處，是夜空中第三亮的巨大球狀星團。"},{id:"M4",name:"M4",commonName:"天蠍座球狀星團",ra:16.394,dec:-26.526,magnitude:5.6,type:"cluster",sizeArcmin:36,difficulty:1,basePrice:150,starHoppingGuide:"極易尋找！先在南方天空找到天蠍座紅超巨星「心宿二（天蠍座心臟）」，往西側僅 1.3 度處即可看到鬆散的球狀星團。"}];class $m{constructor(){}angularDistance(e,t,n,i){const a=e*Math.PI/12,r=t*Math.PI/180,o=n*Math.PI/12,l=i*Math.PI/180,c=a-o,h=Math.sin(r)*Math.sin(l)+Math.cos(r)*Math.cos(l)*Math.cos(c);return Math.acos(Math.max(-1,Math.min(1,h)))*180/Math.PI}isAboveHorizon(e,t,n){if(!n)return!0;const i=n.getRaDecToVector(e,t);return i.applyMatrix4(n.group.matrixWorld),i.y>=40}findObjectsInFov(e,t,n,i,a){const r=[],o=n/2;if(a)for(const l of a){if(!this.isAboveHorizon(l.ra,l.dec,i))continue;const c=this.angularDistance(e,t,l.ra,l.dec);c<=o&&r.push({name:`${l.name} · ${l.features}`,type:Ot.Planet,magnitude:l.magnitude,angularDistance:c,ra:l.ra,dec:l.dec})}for(const l of Zl){if(!l.name||!this.isAboveHorizon(l.ra,l.dec,i))continue;const c=this.angularDistance(e,t,l.ra,l.dec);c<=o&&r.push({name:l.name,type:Ot.StarField,magnitude:l.mag,angularDistance:c,ra:l.ra,dec:l.dec})}for(const l of In){if(!this.isAboveHorizon(l.ra,l.dec,i))continue;const c=this.angularDistance(e,t,l.ra,l.dec);c<=o&&r.push({name:`${l.name} ${l.commonName}`,type:Ot.Messier,magnitude:l.magnitude,angularDistance:c,ra:l.ra,dec:l.dec})}return r.sort((l,c)=>l.magnitude-c.magnitude)}identify(e,t,n,i,a){if(!this.isAboveHorizon(e,t,i))return null;const r=this.findObjectsInFov(e,t,n,i,a);if(r.length===0)return null;r.sort((l,c)=>l.angularDistance-c.angularDistance);const o=Math.max(1.8,Math.min(8,n*.45));return r[0].angularDistance<=o?r[0]:null}}class Ym{constructor(e){this.sprites=[],this.materials=[],this.textures=[],this.tempWorldPos=new R,this.group=new zt,e.add(this.group),this.init()}createGalaxyTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256;t.save(),t.translate(n,i),t.rotate(-Math.PI/6),t.scale(1.2,.55);const a=t.createRadialGradient(0,0,10,0,0,240);a.addColorStop(0,"rgba(230, 240, 255, 0.4)"),a.addColorStop(.3,"rgba(150, 190, 255, 0.2)"),a.addColorStop(.7,"rgba(80, 120, 220, 0.08)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=a,t.beginPath(),t.arc(0,0,240,0,Math.PI*2),t.fill();const r=["rgba(140, 190, 255, 0.15)","rgba(190, 220, 255, 0.18)","rgba(255, 220, 200, 0.12)"];for(let c=0;c<2;c++){const h=c*Math.PI;for(let d=.5;d<4.2;d+=.03){const u=22*Math.exp(.42*d);if(u>220)break;const p=d+h,g=u*Math.cos(p),v=u*Math.sin(p),m=t.createRadialGradient(g,v,0,g,v,18+d*4),f=r[Math.floor(Math.random()*r.length)];m.addColorStop(0,f),m.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=m,t.beginPath(),t.arc(g,v,18+d*4,0,Math.PI*2),t.fill(),Math.random()<.25&&(t.fillStyle="rgba(255, 110, 140, 0.45)",t.beginPath(),t.arc(g+(Math.random()-.5)*8,v+(Math.random()-.5)*8,Math.random()*3+1,0,Math.PI*2),t.fill())}}const o=t.createRadialGradient(0,0,0,0,0,70);o.addColorStop(0,"rgba(255, 255, 245, 0.98)"),o.addColorStop(.15,"rgba(255, 240, 210, 0.85)"),o.addColorStop(.45,"rgba(230, 200, 160, 0.45)"),o.addColorStop(.8,"rgba(180, 160, 190, 0.15)"),o.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=o,t.beginPath(),t.arc(0,0,70,0,Math.PI*2),t.fill(),t.restore();const l=new At(e);return this.textures.push(l),l}createEmissionNebulaTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=t.createRadialGradient(n,i,10,n,i,230);a.addColorStop(0,"rgba(255, 240, 245, 0.9)"),a.addColorStop(.15,"rgba(255, 80, 120, 0.7)"),a.addColorStop(.4,"rgba(210, 40, 90, 0.4)"),a.addColorStop(.7,"rgba(120, 20, 70, 0.15)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=a,t.beginPath(),t.arc(n,i,230,0,Math.PI*2),t.fill();for(let o=0;o<70;o++){const l=Math.random()*Math.PI*2,c=Math.pow(Math.random(),.7)*180,h=n+Math.cos(l)*c,d=i+Math.sin(l)*c,u=Math.random()*45+15,p=t.createRadialGradient(h,d,0,h,d,u);Math.random()<.25?p.addColorStop(0,"rgba(80, 220, 230, 0.35)"):p.addColorStop(0,"rgba(255, 90, 130, 0.3)"),p.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=p,t.beginPath(),t.arc(h,d,u,0,Math.PI*2),t.fill()}for(let o=0;o<15;o++){const l=n+(Math.random()-.5)*40,c=i+(Math.random()-.5)*40,h=t.createRadialGradient(l,c,0,l,c,6);h.addColorStop(0,"rgba(255, 255, 255, 1)"),h.addColorStop(.4,"rgba(200, 230, 255, 0.8)"),h.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=h,t.beginPath(),t.arc(l,c,6,0,Math.PI*2),t.fill()}const r=new At(e);return this.textures.push(r),r}createReflectionNebulaTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=t.createRadialGradient(n,i,10,n,i,220);a.addColorStop(0,"rgba(240, 250, 255, 0.95)"),a.addColorStop(.2,"rgba(100, 170, 255, 0.65)"),a.addColorStop(.5,"rgba(50, 100, 220, 0.3)"),a.addColorStop(.8,"rgba(20, 40, 120, 0.08)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=a,t.beginPath(),t.arc(n,i,220,0,Math.PI*2),t.fill();const r=new At(e);return this.textures.push(r),r}createPlanetaryNebulaTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=t.createRadialGradient(n,i,60,n,i,190);a.addColorStop(0,"rgba(20, 30, 50, 0.1)"),a.addColorStop(.5,"rgba(60, 230, 190, 0.7)"),a.addColorStop(.8,"rgba(255, 80, 100, 0.55)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=a,t.beginPath(),t.arc(n,i,190,0,Math.PI*2),t.fill();const r=t.createRadialGradient(n,i,0,n,i,10);r.addColorStop(0,"rgba(255, 255, 255, 1)"),r.addColorStop(.3,"rgba(180, 220, 255, 0.8)"),r.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=r,t.beginPath(),t.arc(n,i,10,0,Math.PI*2),t.fill();const o=new At(e);return this.textures.push(o),o}createClusterTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=t.createRadialGradient(n,i,0,n,i,210);a.addColorStop(0,"rgba(255, 245, 220, 0.55)"),a.addColorStop(.3,"rgba(200, 220, 255, 0.25)"),a.addColorStop(.7,"rgba(120, 160, 240, 0.06)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=a,t.beginPath(),t.arc(n,i,210,0,Math.PI*2),t.fill();for(let o=0;o<180;o++){const l=Math.pow(Math.random(),1.6)*190,c=Math.random()*Math.PI*2,h=n+Math.cos(c)*l,d=i+Math.sin(c)*l,u=Math.random()*2.2+.6,p=Math.random()*.7+.3,v=Math.random()<.35?`rgba(255, 220, 170, ${p})`:`rgba(210, 235, 255, ${p})`;t.fillStyle=v,t.beginPath(),t.arc(h,d,u,0,Math.PI*2),t.fill()}const r=new At(e);return this.textures.push(r),r}init(){const e=this.createGalaxyTexture(),t=this.createEmissionNebulaTexture();this.createReflectionNebulaTexture();const n=this.createPlanetaryNebulaTexture(),i=this.createClusterTexture(),a=998;for(const r of In){let o;switch(r.type){case"galaxy":o=e;break;case"nebula":o=t;break;case"cluster":o=i;break;case"planetary_nebula":o=n;break;default:o=e;break}const l=new kr({map:o,color:16777215,transparent:!0,blending:Ti,depthWrite:!1,opacity:0});this.materials.push(l);const c=new $l(l),h=r.ra*Math.PI/12,d=r.dec*Math.PI/180;c.position.x=a*Math.cos(d)*Math.cos(h),c.position.y=a*Math.sin(d),c.position.z=a*Math.cos(d)*Math.sin(h);const u=Math.max(4,(r.sizeArcmin||15)*.22);c.scale.set(u,u,1),this.group.add(c),this.sprites.push({sprite:c,dso:r,baseScale:u})}}update(e,t,n){if(!(t||e<35)){for(const{sprite:l}of this.sprites)l.visible=!1;return}const a=t?Math.max(.5,e):e,r=t?1:Math.min(1,(35-a)/20),o=Math.min(7,Math.pow(60/a,.8));for(const{sprite:l,dso:c,baseScale:h}of this.sprites)if(l.getWorldPosition(this.tempWorldPos),this.tempWorldPos.y<0||c.magnitude>n)l.visible=!1;else{l.visible=!0;const d=h*o;l.scale.set(d,d,1);const u=Math.max(.15,(n-c.magnitude)*.22),p=Math.min(.95,u*(.4+o*.12)*r);l.material.opacity=p}}dispose(){for(const e of this.textures)e.dispose();for(const e of this.materials)e.dispose();this.group.parent&&this.group.parent.remove(this.group)}}function jm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ba={exports:{}},ll;function Km(){return ll||(ll=1,(function(s,e){(function(){var t=Math.PI,n=Math.sin,i=Math.cos,a=Math.tan,r=Math.asin,o=Math.atan2,l=Math.acos,c=t/180,h=1e3*60*60*24,d=2440588,u=2451545;function p(q){return q.valueOf()/h-.5+d}function g(q){return new Date((q+.5-d)*h)}function v(q){return p(q)-u}var m=c*23.4397;function f(q,ie){return o(n(q)*i(m)-a(ie)*n(m),i(q))}function T(q,ie){return r(n(ie)*i(m)+i(ie)*n(m)*n(q))}function E(q,ie,he){return o(n(q),i(q)*n(ie)-a(he)*i(ie))}function y(q,ie,he){return r(n(ie)*n(he)+i(ie)*i(he)*i(q))}function N(q,ie){return c*(280.16+360.9856235*q)-ie}function A(q){return q<0&&(q=0),2967e-7/Math.tan(q+.00312536/(q+.08901179))}function w(q){return c*(357.5291+.98560028*q)}function P(q){var ie=c*(1.9148*n(q)+.02*n(2*q)+3e-4*n(3*q)),he=c*102.9372;return q+ie+he+t}function S(q){var ie=w(q),he=P(ie);return{dec:T(he,0),ra:f(he,0)}}var x={};x.getPosition=function(q,ie,he){var V=c*-he,j=c*ie,se=v(q),ee=S(se),me=N(se,V)-ee.ra;return{azimuth:E(me,j,ee.dec),altitude:y(me,j,ee.dec)}};var C=x.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];x.addTime=function(q,ie,he){C.push([q,ie,he])};var k=9e-4;function F(q,ie){return Math.round(q-k-ie/(2*t))}function W(q,ie,he){return k+(q+ie)/(2*t)+he}function $(q,ie,he){return u+q+.0053*n(ie)-.0069*n(2*he)}function X(q,ie,he){return l((n(q)-n(ie)*n(he))/(i(ie)*i(he)))}function Q(q){return-2.076*Math.sqrt(q)/60}function G(q,ie,he,V,j,se,ee){var me=X(q,he,V),be=W(me,ie,j);return $(be,se,ee)}x.getTimes=function(q,ie,he,V){V=V||0;var j=c*-he,se=c*ie,ee=Q(V),me=v(q),be=F(me,j),Ce=W(0,j,be),Xe=w(Ce),Ne=P(Xe),Qe=T(Ne,0),L=$(Ce,Xe,Ne),ht,Fe,Le,xe,We,Ee,b={solarNoon:g(L),nadir:g(L-.5)};for(ht=0,Fe=C.length;ht<Fe;ht+=1)Le=C[ht],xe=(Le[0]+ee)*c,We=G(xe,j,se,Qe,be,Xe,Ne),Ee=L-(We-L),b[Le[1]]=g(Ee),b[Le[2]]=g(We);return b};function re(q){var ie=c*(218.316+13.176396*q),he=c*(134.963+13.064993*q),V=c*(93.272+13.22935*q),j=ie+c*6.289*n(he),se=c*5.128*n(V),ee=385001-20905*i(he);return{ra:f(j,se),dec:T(j,se),dist:ee}}x.getMoonPosition=function(q,ie,he){var V=c*-he,j=c*ie,se=v(q),ee=re(se),me=N(se,V)-ee.ra,be=y(me,j,ee.dec),Ce=o(n(me),a(j)*i(ee.dec)-n(ee.dec)*i(me));return be=be+A(be),{azimuth:E(me,j,ee.dec),altitude:be,distance:ee.dist,parallacticAngle:Ce}},x.getMoonIllumination=function(q){var ie=v(q||new Date),he=S(ie),V=re(ie),j=149598e3,se=l(n(he.dec)*n(V.dec)+i(he.dec)*i(V.dec)*i(he.ra-V.ra)),ee=o(j*n(se),V.dist-j*i(se)),me=o(i(he.dec)*n(he.ra-V.ra),n(he.dec)*i(V.dec)-i(he.dec)*n(V.dec)*i(he.ra-V.ra));return{fraction:(1+i(ee))/2,phase:.5+.5*ee*(me<0?-1:1)/Math.PI,angle:me}};function fe(q,ie){return new Date(q.valueOf()+ie*h/24)}x.getMoonTimes=function(q,ie,he,V){var j=new Date(q);V?j.setUTCHours(0,0,0,0):j.setHours(0,0,0,0);for(var se=.133*c,ee=x.getMoonPosition(j,ie,he).altitude-se,me,be,Ce,Xe,Ne,Qe,L,ht,Fe,Le,xe,We,Ee,b=1;b<=24&&(me=x.getMoonPosition(fe(j,b),ie,he).altitude-se,be=x.getMoonPosition(fe(j,b+1),ie,he).altitude-se,Ne=(ee+be)/2-me,Qe=(be-ee)/2,L=-Qe/(2*Ne),ht=(Ne*L+Qe)*L+me,Fe=Qe*Qe-4*Ne*me,Le=0,Fe>=0&&(Ee=Math.sqrt(Fe)/(Math.abs(Ne)*2),xe=L-Ee,We=L+Ee,Math.abs(xe)<=1&&Le++,Math.abs(We)<=1&&Le++,xe<-1&&(xe=We)),Le===1?ee<0?Ce=b+xe:Xe=b+xe:Le===2&&(Ce=b+(ht<0?We:xe),Xe=b+(ht<0?xe:We)),!(Ce&&Xe));b+=2)ee=be;var _={};return Ce&&(_.rise=fe(j,Ce)),Xe&&(_.set=fe(j,Xe)),!Ce&&!Xe&&(_[ht>0?"alwaysUp":"alwaysDown"]=!0),_},s.exports=x})()})(Ba)),Ba.exports}var Zm=Km();const Ei=jm(Zm),Qm={mercury:{a0:.387098,a1:0,e0:.20563,e1:25e-6,I0:7.0049,I1:-.0059,L0:252.2509,L1:4.09233445,w0:77.4561,w1:.0016,node0:48.3309,node1:-.0125,baseMag:-.4,baseSizeArcsec:8},venus:{a0:.72333,a1:0,e0:.006772,e1:-48e-6,I0:3.3946,I1:-8e-4,L0:181.9798,L1:1.60213034,w0:131.5637,w1:.005,node0:76.6799,node1:-.0278,baseMag:-4.3,baseSizeArcsec:25},mars:{a0:1.523688,a1:0,e0:.0934,e1:9e-5,I0:1.8497,I1:-6e-4,L0:355.433,L1:.52403304,w0:336.0602,w1:.0018,node0:49.5581,node1:-.0295,baseMag:-1.5,baseSizeArcsec:14},jupiter:{a0:5.202603,a1:2e-8,e0:.048497,e1:163e-6,I0:1.3033,I1:-2e-4,L0:34.3515,L1:.08308529,w0:14.3312,w1:.0078,node0:100.4644,node1:.0064,baseMag:-2.6,baseSizeArcsec:45},saturn:{a0:9.554909,a1:-2e-6,e0:.05551,e1:-346e-6,I0:2.4889,I1:5e-4,L0:50.0774,L1:.03344414,w0:93.0568,w1:.0196,node0:113.6655,node1:-.0072,baseMag:.5,baseSizeArcsec:40},uranus:{a0:19.218446,a1:-4e-7,e0:.046296,e1:-27e-6,I0:.7732,I1:1e-4,L0:314.055,L1:.01172835,w0:173.0053,w1:.0149,node0:74.006,node1:.0074,baseMag:5.7,baseSizeArcsec:3.8},neptune:{a0:30.110387,a1:4e-7,e0:.008988,e1:6e-6,I0:1.77,I1:4e-4,L0:304.3487,L1:.00598103,w0:48.1203,w1:.0274,node0:131.7841,node1:-6e-4,baseMag:7.8,baseSizeArcsec:2.4}},Jm={a0:1.000003,a1:0,e0:.01671,e1:-42e-6,I0:5e-5,I1:-.0133,L0:100.4664,L1:.98564736,w0:102.9373,w1:5e-5,node0:0,node1:0,baseMag:0,baseSizeArcsec:0};class e0{constructor(e){this.planetSprites=new Map,this.planetDataList=[],this.textures=new Map,this.moonImage=null,this.lastRenderedMoonPhase=-1,this.celestialGroup=e,this.initMoonSystem(),this.initTextures(),this.createPlanetSprites()}initMoonSystem(){this.moonCanvas=document.createElement("canvas"),this.moonCanvas.width=1024,this.moonCanvas.height=1024,this.moonCtx=this.moonCanvas.getContext("2d"),this.moonTexture=new At(this.moonCanvas),this.moonTexture.generateMipmaps=!0,this.moonTexture.minFilter=Ln,this.moonTexture.magFilter=kt;const e="./",n=`${e.endsWith("/")?e:`${e}/`}textures/moon_map.jpg`,i=new Image;i.crossOrigin="anonymous",i.onload=()=>{this.moonImage=i,this.redrawMoon(this.lastRenderedMoonPhase>=0?this.lastRenderedMoonPhase:.5)},i.onerror=()=>{console.warn("Could not load NASA Moon texture, using high-res procedural fallback"),this.redrawMoon(.5)},i.src=n,this.redrawMoon(.5)}redrawMoon(e){this.lastRenderedMoonPhase=e;const t=this.moonCtx,n=1024,i=1024,a=512,r=512,o=440;t.clearRect(0,0,n,i);const l=t.createRadialGradient(a,r,o*.9,a,r,o*1.18);if(l.addColorStop(0,"rgba(241, 245, 249, 0.45)"),l.addColorStop(.5,"rgba(203, 213, 225, 0.12)"),l.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=l,t.fillRect(0,0,n,i),t.save(),t.beginPath(),t.arc(a,r,o,0,Math.PI*2),t.clip(),this.moonImage&&this.moonImage.complete&&this.moonImage.naturalWidth>0)t.drawImage(this.moonImage,a-o,r-o,o*2,o*2);else{const d=t.createRadialGradient(a-50,r-50,50,a,r,o);d.addColorStop(0,"#f8fafc"),d.addColorStop(.5,"#cbd5e1"),d.addColorStop(.8,"#94a3b8"),d.addColorStop(1,"#475569"),t.fillStyle=d,t.fill(),t.fillStyle="rgba(71, 85, 105, 0.65)",t.beginPath(),t.ellipse(a-140,r-100,180,140,.2,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(a+100,r-60,120,100,-.3,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(a+40,r+110,140,80,.1,0,Math.PI*2),t.fill()}const c=(e%1+1)%1;if(t.fillStyle="rgba(10, 15, 26, 0.94)",c<.02||c>.98)t.fillRect(0,0,n,i);else if(!(c>.48&&c<.52)){if(t.beginPath(),c<.5){t.arc(a,r,o+1,Math.PI*.5,Math.PI*1.5,!1);const d=Math.cos(c*Math.PI*2);t.ellipse(a,r,Math.abs(d)*o,o+1,0,Math.PI*1.5,Math.PI*.5,d>0)}else{t.arc(a,r,o+1,Math.PI*1.5,Math.PI*.5,!1);const d=Math.cos(c*Math.PI*2);t.ellipse(a,r,Math.abs(d)*o,o+1,0,Math.PI*.5,Math.PI*1.5,d>0)}t.fill()}const h=t.createRadialGradient(a,r,o*.75,a,r,o);h.addColorStop(0,"rgba(0, 0, 0, 0)"),h.addColorStop(1,"rgba(15, 23, 42, 0.4)"),t.fillStyle=h,t.fillRect(0,0,n,i),t.restore(),this.moonTexture.needsUpdate=!0}initTextures(){this.textures.set("mercury",this.createMercuryTexture()),this.textures.set("venus",this.createVenusTexture()),this.textures.set("mars",this.createMarsTexture()),this.textures.set("jupiter",this.createJupiterTexture()),this.textures.set("saturn",this.createSaturnTexture()),this.textures.set("uranus",this.createUranusTexture()),this.textures.set("neptune",this.createNeptuneTexture()),this.textures.set("moon",this.moonTexture)}createSaturnTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=t.createRadialGradient(n,i,50,n,i,240);a.addColorStop(0,"rgba(253, 230, 138, 0.25)"),a.addColorStop(.5,"rgba(217, 119, 6, 0.08)"),a.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=a,t.fillRect(0,0,512,512),t.save(),t.translate(n,i),t.rotate(-.45),t.save(),t.beginPath(),t.rect(-250,-250,500,250),t.clip(),this.drawSaturnRings(t),t.restore();const r=64;t.beginPath(),t.arc(0,0,r,0,Math.PI*2);const o=t.createRadialGradient(-18,-18,5,0,0,r);o.addColorStop(0,"#fef08a"),o.addColorStop(.4,"#eab308"),o.addColorStop(.7,"#ca8a04"),o.addColorStop(1,"#854d0e"),t.fillStyle=o,t.fill();for(let c=-r;c<r;c+=4){const h=Math.sqrt(r*r-c*c);t.fillStyle=Math.abs(c)%12<6?"rgba(202, 138, 4, 0.4)":"rgba(254, 240, 138, 0.35)",t.fillRect(-h,c,h*2,3)}t.fillStyle="rgba(0,0,0,0.4)",t.beginPath(),t.arc(0,0,r,0,Math.PI*2),t.fill(),t.save(),t.beginPath(),t.rect(-250,0,500,250),t.clip(),this.drawSaturnRings(t),t.restore(),t.fillStyle="rgba(15, 23, 42, 0.65)",t.beginPath(),t.ellipse(0,0,r+4,18,0,0,Math.PI),t.fill(),t.restore();const l=new At(e);return l.needsUpdate=!0,l}drawSaturnRings(e){const t=[{rX:220,rY:62,color:"rgba(234, 179, 8, 0.35)",width:14},{rX:198,rY:54,color:"rgba(0, 0, 0, 0.85)",width:6},{rX:185,rY:50,color:"rgba(254, 240, 138, 0.75)",width:28},{rX:145,rY:38,color:"rgba(180, 83, 9, 0.45)",width:12}];for(const n of t)e.beginPath(),e.ellipse(0,0,n.rX,n.rY,0,0,Math.PI*2),e.strokeStyle=n.color,e.lineWidth=n.width,e.stroke()}createJupiterTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=90,r=t.createRadialGradient(n,i,a*.8,n,i,a*2.2);r.addColorStop(0,"rgba(254, 215, 170, 0.3)"),r.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=r,t.fillRect(0,0,512,512),t.save(),t.beginPath(),t.arc(n,i,a,0,Math.PI*2),t.clip();const o=t.createLinearGradient(n,i-a,n,i+a);o.addColorStop(0,"#fed7aa"),o.addColorStop(.3,"#c2410c"),o.addColorStop(.5,"#ffedd5"),o.addColorStop(.7,"#9a3412"),o.addColorStop(1,"#fed7aa"),t.fillStyle=o,t.fill();const l=[-70,-50,-32,-14,0,18,38,58,72],c=["rgba(154, 52, 18, 0.7)","rgba(255, 237, 213, 0.85)","rgba(194, 65, 12, 0.85)","rgba(254, 215, 170, 0.9)","rgba(180, 83, 9, 0.75)","rgba(254, 240, 138, 0.85)","rgba(154, 52, 18, 0.8)","rgba(255, 237, 213, 0.8)","rgba(124, 45, 18, 0.65)"];for(let g=0;g<l.length;g++)t.fillStyle=c[g],t.fillRect(n-a,i+l[g],a*2,12);t.beginPath(),t.ellipse(n+28,i+32,18,11,-.1,0,Math.PI*2);const h=t.createRadialGradient(n+28,i+32,2,n+28,i+32,18);h.addColorStop(0,"#ef4444"),h.addColorStop(.6,"#b91c1c"),h.addColorStop(1,"rgba(185, 28, 28, 0.4)"),t.fillStyle=h,t.fill();const d=t.createRadialGradient(n-30,i-30,20,n,i,a);d.addColorStop(0,"rgba(255,255,255,0.2)"),d.addColorStop(.8,"rgba(0,0,0,0)"),d.addColorStop(1,"rgba(0,0,0,0.65)"),t.fillStyle=d,t.beginPath(),t.arc(n,i,a,0,Math.PI*2),t.fill(),t.restore();const u=[{x:n-210,y:i+4,r:4.5,color:"#fef08a",name:"Callisto"},{x:n-140,y:i-2,r:5.5,color:"#fed7aa",name:"Ganymede"},{x:n+130,y:i+3,r:4,color:"#e0f2fe",name:"Europa"},{x:n+180,y:i-5,r:4.8,color:"#facc15",name:"Io"}];for(const g of u)t.beginPath(),t.arc(g.x,g.y,g.r,0,Math.PI*2),t.fillStyle=g.color,t.shadowColor=g.color,t.shadowBlur=8,t.fill(),t.shadowBlur=0;const p=new At(e);return p.needsUpdate=!0,p}createMarsTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=110,r=t.createRadialGradient(n,i,a*.8,n,i,a*2);r.addColorStop(0,"rgba(239, 68, 68, 0.35)"),r.addColorStop(.5,"rgba(185, 28, 28, 0.1)"),r.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=r,t.fillRect(0,0,512,512),t.save(),t.beginPath(),t.arc(n,i,a,0,Math.PI*2),t.clip();const o=t.createRadialGradient(n-30,i-30,20,n,i,a);o.addColorStop(0,"#f87171"),o.addColorStop(.4,"#dc2626"),o.addColorStop(.8,"#991b1b"),o.addColorStop(1,"#450a0a"),t.fillStyle=o,t.fill(),t.fillStyle="rgba(69, 10, 10, 0.65)",t.beginPath(),t.ellipse(n-15,i+20,45,25,.3,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(n+35,i-10,30,18,-.4,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.ellipse(n,i-a+14,38,16,0,0,Math.PI*2),t.fill(),t.restore();const l=new At(e);return l.needsUpdate=!0,l}createVenusTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=110,r=t.createRadialGradient(n,i,a*.5,n,i,a*2.2);r.addColorStop(0,"rgba(255, 255, 255, 0.9)"),r.addColorStop(.3,"rgba(254, 240, 138, 0.35)"),r.addColorStop(.7,"rgba(56, 189, 248, 0.1)"),r.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=r,t.fillRect(0,0,512,512),t.beginPath(),t.arc(n,i,a,0,Math.PI*2);const o=t.createRadialGradient(n-35,i-35,10,n,i,a);o.addColorStop(0,"#ffffff"),o.addColorStop(.4,"#fef9c3"),o.addColorStop(.8,"#fde047"),o.addColorStop(1,"#ca8a04"),t.fillStyle=o,t.fill();const l=new At(e);return l.needsUpdate=!0,l}createMercuryTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=95;t.save(),t.beginPath(),t.arc(n,i,a,0,Math.PI*2),t.clip();const r=t.createRadialGradient(n-30,i-30,10,n,i,a);r.addColorStop(0,"#e2e8f0"),r.addColorStop(.5,"#94a3b8"),r.addColorStop(.8,"#475569"),r.addColorStop(1,"#1e293b"),t.fillStyle=r,t.fill(),t.fillStyle="rgba(30, 41, 59, 0.5)";for(let l=0;l<20;l++){const c=n+Math.sin(l*9)*a*.7,h=i+Math.cos(l*13)*a*.7;t.beginPath(),t.arc(c,h,l%5+3,0,Math.PI*2),t.fill()}t.restore();const o=new At(e);return o.needsUpdate=!0,o}createUranusTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=95,r=t.createRadialGradient(n-25,i-25,10,n,i,a);r.addColorStop(0,"#e0f2fe"),r.addColorStop(.4,"#7dd3fc"),r.addColorStop(.8,"#0284c7"),r.addColorStop(1,"#075985"),t.fillStyle=r,t.beginPath(),t.arc(n,i,a,0,Math.PI*2),t.fill();const o=new At(e);return o.needsUpdate=!0,o}createNeptuneTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=95,r=t.createRadialGradient(n-25,i-25,10,n,i,a);r.addColorStop(0,"#93c5fd"),r.addColorStop(.4,"#2563eb"),r.addColorStop(.8,"#1d4ed8"),r.addColorStop(1,"#1e3a8a"),t.fillStyle=r,t.beginPath(),t.arc(n,i,a,0,Math.PI*2),t.fill();const o=new At(e);return o.needsUpdate=!0,o}createMoonTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=110,r=t.createRadialGradient(n,i,a*.8,n,i,a*2.2);r.addColorStop(0,"rgba(226, 232, 240, 0.45)"),r.addColorStop(.5,"rgba(148, 163, 184, 0.12)"),r.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=r,t.fillRect(0,0,512,512),t.save(),t.beginPath(),t.arc(n,i,a,0,Math.PI*2),t.clip();const o=t.createRadialGradient(n-20,i-20,20,n,i,a);o.addColorStop(0,"#f8fafc"),o.addColorStop(.5,"#cbd5e1"),o.addColorStop(.8,"#94a3b8"),o.addColorStop(1,"#475569"),t.fillStyle=o,t.fill(),t.fillStyle="rgba(71, 85, 105, 0.65)",t.beginPath(),t.ellipse(n-35,i-25,45,35,.2,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(n+25,i-15,30,25,-.3,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(n+10,i+28,35,20,.1,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(n+45,i-35,20,18,.4,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(n+8,i+62,5,0,Math.PI*2),t.fill(),t.restore();const l=new At(e);return l.needsUpdate=!0,l}solveKepler(e,t){const n=e*Math.PI/180;let i=n;for(let a=0;a<15;a++){const r=(i-t*Math.sin(i)-n)/(1-t*Math.cos(i));if(i-=r,Math.abs(r)<1e-6)break}return i}getHeliocentric(e,t){const n=e.a0+e.a1*t,i=e.e0+e.e1*t,a=(e.I0+e.I1*t)*(Math.PI/180),r=(e.L0+e.L1*t)%360,o=(e.w0+e.w1*t)%360,l=(e.node0+e.node1*t)*(Math.PI/180),c=(r-o+360)%360,h=this.solveKepler(c,i),d=n*(Math.cos(h)-i),u=n*(Math.sqrt(1-i*i)*Math.sin(h)),p=Math.atan2(u,d),g=Math.sqrt(d*d+u*u),v=o*Math.PI/180,m=p+v-l,f=g*(Math.cos(l)*Math.cos(m)-Math.sin(l)*Math.sin(m)*Math.cos(a)),T=g*(Math.sin(l)*Math.cos(m)+Math.cos(l)*Math.sin(m)*Math.cos(a)),E=g*(Math.sin(m)*Math.sin(a));return{x:f,y:T,z:E}}calculatePlanets(e){const n=e.getTime()/864e5+24405875e-1-2451545,i=this.getHeliocentric(Jm,n),a=(23.43929111-4e-7*n)*(Math.PI/180),r=[{id:"mercury",name:"水星 Mercury",nameEn:"Mercury",desc:"距離太陽最近的行星，暮光中的敏捷信使",feat:"岩質坑洞表面"},{id:"venus",name:"金星 Venus",nameEn:"Venus",desc:"夜空中最璀璨的啟明星與長庚星",feat:"耀眼銀白雲海 · 呈現金星相位"},{id:"mars",name:"火星 Mars",nameEn:"Mars",desc:"紅色荒漠行星，人類太空探索的下一個家園",feat:"紅色鐵鏽地貌 · 兩極白色極冠"},{id:"jupiter",name:"木星 Jupiter",nameEn:"Jupiter",desc:"太陽系行星之王，擁有絢麗氣態雲帶與大紅斑",feat:"雲帶斑紋 · 大紅斑旋渦 · 4大伽利略衛星同框"},{id:"saturn",name:"土星 Saturn",nameEn:"Saturn",desc:"太陽系最美麗的寶石，擁有壯麗宏偉的光環系統",feat:"宏偉土星環 · 卡西尼縫 · 金黃雲帶"},{id:"uranus",name:"天王星 Uranus",nameEn:"Uranus",desc:"側躺自轉的冰巨行星，散發淡雅青藍色光澤",feat:"青藍色氣態圓盤"},{id:"neptune",name:"海王星 Neptune",nameEn:"Neptune",desc:"太陽系最外側的大行星，深邃幽藍的風暴之王",feat:"深藍色冰巨星"}],o=[];for(const g of r){const v=Qm[g.id];if(!v)continue;const m=this.getHeliocentric(v,n),f=m.x-i.x,T=m.y-i.y,E=m.z-i.z,y=f,N=T*Math.cos(a)-E*Math.sin(a),A=T*Math.sin(a)+E*Math.cos(a),w=Math.sqrt(y*y+N*N+A*A);let P=Math.atan2(N,y)*(12/Math.PI);P<0&&(P+=24);const S=Math.asin(A/w)*(180/Math.PI),x=Math.sqrt(m.x*m.x+m.y*m.y+m.z*m.z),C=v.baseMag+5*Math.log10(x*w),k=v.baseSizeArcsec/w;o.push({id:g.id,name:g.name,nameEn:g.nameEn,type:Ot.Planet,ra:P,dec:S,magnitude:parseFloat(C.toFixed(2)),angularSizeArcsec:parseFloat(k.toFixed(1)),description:g.desc,features:g.feat})}const l=Ei.getMoonPosition(e,24.14,121.27),c=Ei.getMoonIllumination(e),h=["新月","眉月","上弦月","盈凸月","滿月","虧凸月","下弦月","殘月"],d=Math.round(c.phase*8)%8;let u=(l.azimuth*12/Math.PI+12)%24,p=l.altitude*180/Math.PI;return o.push({id:"moon",name:`月球 Moon (${h[d]})`,nameEn:"Moon",type:Ot.Planet,ra:u,dec:p,magnitude:-12.5+(1-c.fraction)*4,angularSizeArcsec:1800,description:`地球唯一的天然衛星，目前照亮比例 ${Math.round(c.fraction*100)}%`,features:`月海暗斑 · 第谷環形山輻射紋 · ${h[d]}`}),this.planetDataList=o,o}createPlanetSprites(){const e=["mercury","venus","mars","jupiter","saturn","uranus","neptune","moon"];for(const t of e){const n=this.textures.get(t);if(!n)continue;const i=new kr({map:n,color:16777215,transparent:!0,blending:jn,depthWrite:!1}),a=new $l(i);a.name=`planet_${t}`,this.planetSprites.set(t,a),this.celestialGroup.add(a)}}update(e,t){const n=this.calculatePlanets(e),i=995,a=Ei.getMoonIllumination(e);Math.abs(a.phase-this.lastRenderedMoonPhase)>.003&&this.redrawMoon(a.phase);for(const r of n){const o=this.planetSprites.get(r.id);if(!o)continue;const l=r.ra*Math.PI/12,c=r.dec*Math.PI/180,h=i*Math.cos(c)*Math.cos(l),d=i*Math.sin(c),u=i*Math.cos(c)*Math.sin(l);o.position.set(h,d,u);let p=8;r.id==="moon"?p=38:r.id==="saturn"?p=14:r.id==="jupiter"?p=13.5:r.id==="venus"?p=12:r.id==="mars"?p=9:(r.id==="uranus"||r.id==="neptune")&&(p=7);const g=60/Math.max(.18,t),v=Math.pow(g,.82),m=p*(1+(v-1)*.55);o.scale.set(m,m,1)}}getPlanets(){return this.planetDataList}dispose(){for(const[,e]of this.planetSprites)e.material.dispose(),this.celestialGroup.remove(e);for(const[,e]of this.textures)e.dispose();this.planetSprites.clear(),this.textures.clear()}}class ia extends He{constructor(){const e=ia.SkyShader,t=new ft({name:e.name,uniforms:es.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Et,depthWrite:!1});super(new sn(1,1,1),t),this.isSky=!0}}ia.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new R},up:{value:new R(0,1,0)}},vertexShader:`
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

		}`};class t0{constructor(e){this.scene=e,this.scene.background=new Ue(66054),this.sky=new ia,this.sky.scale.setScalar(45e4);const t=this.sky.material.uniforms;t.turbidity.value=2,t.rayleigh.value=1,t.mieCoefficient.value=.003,t.mieDirectionalG.value=.8,this.scene.add(this.sky),this.sunLight=new rl(16777215,1),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=500;const n=50;this.sunLight.shadow.camera.left=-n,this.sunLight.shadow.camera.right=n,this.sunLight.shadow.camera.top=n,this.sunLight.shadow.camera.bottom=-n,this.scene.add(this.sunLight),this.moonLight=new rl(8956671,.15),this.moonLight.castShadow=!1,this.scene.add(this.moonLight),this.ambientLight=new Dm(396312,.35),this.scene.add(this.ambientLight),this.hemisphereLight=new Rm(1055792,330245,.25),this.scene.add(this.hemisphereLight)}update(e,t,n){const i=Ei.getPosition(e,t,n),a=Ei.getMoonPosition(e,t,n),r=Math.PI/2-i.altitude,o=i.azimuth,l=Math.PI/2-a.altitude,c=a.azimuth,h=1e3,d=new R().setFromSphericalCoords(h,r,o),u=new R().setFromSphericalCoords(h,l,c),p=i.altitude,g=p*(180/Math.PI),v=this.sky.material.uniforms;if(g>0){const m=Math.min(1,g/45);v.turbidity.value=2,v.rayleigh.value=1.2+(1-m)*1.5,v.mieCoefficient.value=5e-4,v.mieDirectionalG.value=.85,v.sunPosition.value.copy(d),this.sunLight.intensity=Math.max(.2,m*1.2),g<10?(this.sunLight.color.setHSL(.08,.85,.6),this.ambientLight.color.setHex(3678232),this.ambientLight.intensity=.35):(this.sunLight.color.setHSL(.12,.15,.95),this.ambientLight.color.setHex(2111568),this.ambientLight.intensity=.45)}else{const m=Math.max(0,Math.min(1,-g/12));v.sunPosition.value.set(0,-1e3,0),v.turbidity.value=Math.max(.01,2*(1-m)),v.rayleigh.value=Math.max(.001,1*(1-m)),v.mieCoefficient.value=Math.max(1e-4,.003*(1-m)),this.sunLight.intensity=0,this.ambientLight.color.setHex(396312),this.ambientLight.intensity=.25}if(this.sunLight.position.copy(d),this.moonLight.position.copy(u),a.altitude>0){const m=Math.sin(Math.max(0,a.altitude));this.moonLight.intensity=m*.2}else this.moonLight.intensity=0;return p}dispose(){this.scene.remove(this.sky),this.scene.remove(this.sunLight),this.scene.remove(this.moonLight),this.scene.remove(this.ambientLight),this.scene.remove(this.hemisphereLight),this.sky.geometry.dispose(),this.sky.material.dispose()}}class n0{constructor(){this.timeScales=[0,1,10,60,300,1e3],this.lastSunElevation=0}update(e){const t=oe.getState();!t.isTimePaused&&t.timeScale>0&&t.advanceTime(e*1e3)}setSunElevation(e){this.lastSunElevation=e}reverseTime(e){return oe.getState().reverseTime(e)}getFormattedTime(){return oe.getState().currentTime.toLocaleString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}getSunPhase(e){const n=(e??this.lastSunElevation)*(180/Math.PI);return n>6?"day":n>0?"golden_hour":n>-6?"civil_twilight":n>-12?"nautical_twilight":n>-18?"astronomical_twilight":"night"}}class i0{constructor(){this.timeSinceLastChange=0,this.changeInterval=0,this.resetTimer()}resetTimer(){this.changeInterval=300+Math.random()*600,this.timeSinceLastChange=0}update(e){this.timeSinceLastChange+=e,this.timeSinceLastChange>=this.changeInterval&&(this.transitionWeather(),this.resetTimer())}transitionWeather(){const e=oe.getState().weather,t=Math.random();let n=e;switch(e){case Ge.Clear:t<.7?n=Ge.Clear:t<.95?n=Ge.PartlyCloudy:n=Ge.Cloudy;break;case Ge.PartlyCloudy:t<.3?n=Ge.Clear:t<.7?n=Ge.PartlyCloudy:t<.95?n=Ge.Cloudy:n=Ge.Rainy;break;case Ge.Cloudy:t<.1?n=Ge.Clear:t<.35?n=Ge.PartlyCloudy:t<.8?n=Ge.Cloudy:n=Ge.Rainy;break;case Ge.Rainy:t<.05?n=Ge.Clear:t<.2?n=Ge.PartlyCloudy:t<.6?n=Ge.Cloudy:n=Ge.Rainy;break}n!==e&&oe.getState().setWeather(n)}getVisibility(){switch(oe.getState().weather){case Ge.Clear:return 1;case Ge.PartlyCloudy:return .6;case Ge.Cloudy:return .1;case Ge.Rainy:return 0;default:return 1}}getCloudCoverage(){switch(oe.getState().weather){case Ge.Clear:return 0;case Ge.PartlyCloudy:return .4;case Ge.Cloudy:return .8;case Ge.Rainy:return 1;default:return 0}}}const s0=`
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,a0=`
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
`;class r0{constructor(e){this.time=0,this.scene=e,this.material=new ft({vertexShader:s0,fragmentShader:a0,uniforms:{time:{value:0},coverage:{value:0},windDir:{value:new Ae(1,.5).normalize()}},transparent:!0,depthWrite:!1,side:Xt});const t=new Mn(1e4,1e4);this.mesh=new He(t,this.material),this.mesh.rotation.x=-Math.PI/2,this.mesh.position.y=300,this.scene.add(this.mesh)}update(e,t,n){this.time+=e,this.material.uniforms.time.value=this.time;const i=this.material.uniforms.coverage.value;this.material.uniforms.coverage.value=ah.lerp(i,t,e*.1),this.material.uniforms.windDir.value.copy(n)}dispose(){this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.material.dispose()}}const o0=`
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
`,l0=`
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
`;class c0{constructor(e){this.time=0,this.rainCount=3e3,this.visible=!1,this.scene=e;const t=new xt,n=new Float32Array(this.rainCount*3),i=new Float32Array(this.rainCount),a=new Float32Array(this.rainCount);for(let r=0;r<this.rainCount;r++)n[r*3]=(Math.random()-.5)*100,n[r*3+1]=Math.random()*100,n[r*3+2]=(Math.random()-.5)*100,i[r]=20+Math.random()*20,a[r]=Math.random()*100;t.setAttribute("position",new _t(n,3)),t.setAttribute("speed",new _t(i,1)),t.setAttribute("phase",new _t(a,1)),this.material=new ft({vertexShader:o0,fragmentShader:l0,uniforms:{time:{value:0},intensity:{value:0}},transparent:!0,depthWrite:!1,blending:Ti}),this.points=new Yl(t,this.material),this.points.visible=!1,this.scene.add(this.points)}update(e,t,n){if(n<=.01&&!this.visible){this.points.visible=!1;return}this.points.visible=!0,this.time+=e,this.material.uniforms.time.value=this.time,this.material.uniforms.intensity.value=n,this.points.position.set(t.x,0,t.z)}setVisible(e){this.visible=e,e||(this.material.uniforms.intensity.value=0)}dispose(){this.scene.remove(this.points),this.points.geometry.dispose(),this.material.dispose()}}class h0{constructor(){this.ctx=null,this.masterGain=null,this.masterCompressor=null,this.masterFilter=null,this.categories={},this.initialized=!1,this.currentSunPhase="",this.activeAmbientSource=null,this.activeAmbientFilter=null,this.ambientGain=null,this.activeWeather=null,this.weatherGain=null,this.natureTimer=null,this.isRaining=!1}init(){if(!this.initialized)try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterCompressor=this.ctx.createDynamicsCompressor(),this.masterCompressor.threshold.setValueAtTime(-6,this.ctx.currentTime),this.masterCompressor.knee.setValueAtTime(10,this.ctx.currentTime),this.masterCompressor.ratio.setValueAtTime(12,this.ctx.currentTime),this.masterCompressor.attack.setValueAtTime(.003,this.ctx.currentTime),this.masterCompressor.release.setValueAtTime(.25,this.ctx.currentTime),this.masterFilter=this.ctx.createBiquadFilter(),this.masterFilter.type="lowpass",this.masterFilter.frequency.setValueAtTime(3e3,this.ctx.currentTime),this.masterFilter.Q.setValueAtTime(.7,this.ctx.currentTime),this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.65,this.ctx.currentTime),this.masterFilter.connect(this.masterGain),this.masterGain.connect(this.masterCompressor),this.masterCompressor.connect(this.ctx.destination),["ambient","weather","machine","sfx"].forEach(t=>{const n=this.ctx.createGain();n.connect(this.masterFilter),this.categories[t]=n}),this.initialized=!0,this.startNatureScheduler()}catch(e){console.error("Failed to initialize AudioContext:",e)}}createNoiseBuffer(e,t=6){if(!this.ctx)return null;const n=this.ctx.sampleRate,i=n*t,a=this.ctx.createBuffer(1,i,n),r=a.getChannelData(0);let o=0,l=0;for(let h=0;h<i;h++){const d=Math.random()*2-1;e==="pink"?(o=.99*o+d*.05,l=.96*l+d*.15,r[h]=(o+l)*.25):e==="brown"&&(o=(o+.02*d)/1.02,r[h]=o*2.2)}const c=Math.floor(n*.1);for(let h=0;h<c;h++){const d=h/c,u=r[h],p=r[i-c+h];r[h]=u*d+p*(1-d),r[i-c+h]=r[h]}return a}setAmbientForPhase(e){if(!this.ctx||!this.initialized||this.currentSunPhase===e&&this.activeAmbientSource)return;this.currentSunPhase=e;const t=this.ctx.currentTime;if(this.ambientGain&&this.activeAmbientSource){const r=this.activeAmbientSource;this.ambientGain.gain.setTargetAtTime(.001,t,.4),setTimeout(()=>{try{r.stop()}catch{}},600)}this.ambientGain=this.ctx.createGain(),this.ambientGain.gain.setValueAtTime(.001,t),this.ambientGain.connect(this.categories.ambient);const n=this.createNoiseBuffer("brown",6);if(!n)return;const i=this.ctx.createBufferSource();i.buffer=n,i.loop=!0;const a=this.ctx.createBiquadFilter();a.type="lowpass",e==="night"||e==="astronomical_twilight"?(a.frequency.setValueAtTime(140,t),this.ambientGain.gain.setTargetAtTime(.08,t,.8)):(a.frequency.setValueAtTime(200,t),this.ambientGain.gain.setTargetAtTime(.05,t,.8)),i.connect(a),a.connect(this.ambientGain),i.start(),this.activeAmbientSource=i,this.activeAmbientFilter=a}startNatureScheduler(){this.natureTimer&&clearInterval(this.natureTimer);const e=()=>{if(!this.ctx||!this.initialized||this.isRaining){this.natureTimer=window.setTimeout(e,3e3);return}if(this.currentSunPhase==="night"||this.currentSunPhase==="astronomical_twilight"||this.currentSunPhase==="nautical_twilight"){this.triggerCricketChirp();const n=1800+Math.random()*3200;this.natureTimer=window.setTimeout(e,n)}else{this.triggerBirdSong();const n=3500+Math.random()*4500;this.natureTimer=window.setTimeout(e,n)}};this.natureTimer=window.setTimeout(e,2e3)}triggerCricketChirp(){if(!this.ctx||!this.initialized)return;const e=this.ctx.currentTime,t=4600+Math.random()*400,n=3,i=.035,a=.025;let r=null;typeof this.ctx.createStereoPanner=="function"&&(r=this.ctx.createStereoPanner(),r.pan.setValueAtTime(Math.random()*1.4-.7,e));const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(t,e),o.Q.setValueAtTime(4,e);const l=this.ctx.createGain();l.gain.setValueAtTime(1e-4,e);for(let h=0;h<n;h++){const d=e+h*(i+a),u=d+i*.3,p=d+i,g=.05+Math.random()*.03;l.gain.setValueAtTime(1e-4,d),l.gain.linearRampToValueAtTime(g,u),l.gain.linearRampToValueAtTime(1e-4,p)}const c=this.ctx.createOscillator();c.type="sine",c.frequency.setValueAtTime(t,e),c.connect(o),o.connect(l),r?(l.connect(r),r.connect(this.categories.ambient)):l.connect(this.categories.ambient),c.start(e),c.stop(e+n*(i+a)+.05)}triggerBirdSong(){if(!this.ctx||!this.initialized)return;const e=this.ctx.currentTime,t=Math.random()<.5?2:3;let n=null;typeof this.ctx.createStereoPanner=="function"&&(n=this.ctx.createStereoPanner(),n.pan.setValueAtTime(Math.random()*1.4-.7,e));let i=e;for(let a=0;a<t;a++){const r=i,o=.12+Math.random()*.1,l=2400+Math.random()*800,c=l+(Math.random()*800-300),h=this.ctx.createOscillator();h.type="sine",h.frequency.setValueAtTime(l,r),h.frequency.exponentialRampToValueAtTime(Math.max(1e3,c),r+o);const d=this.ctx.createGain();d.gain.setValueAtTime(1e-4,r),d.gain.linearRampToValueAtTime(.045,r+o*.3),d.gain.exponentialRampToValueAtTime(1e-4,r+o),h.connect(d),n?(d.connect(n),n.connect(this.categories.ambient)):d.connect(this.categories.ambient),h.start(r),h.stop(r+o+.02),i+=o+(.05+Math.random()*.08)}}setWeatherAudio(e,t){if(!(!this.ctx||!this.initialized))if(this.isRaining=e==="Rainy",e==="Rainy"){if(!this.activeWeather){const n=this.createNoiseBuffer("pink",6);if(!n)return;const i=this.ctx.createBufferSource();i.buffer=n,i.loop=!0;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(650,this.ctx.currentTime),this.weatherGain=this.ctx.createGain(),this.weatherGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.weatherGain.connect(this.categories.weather),i.connect(a),a.connect(this.weatherGain),i.start(),this.activeWeather=i}this.weatherGain&&this.weatherGain.gain.setTargetAtTime(t*.18,this.ctx.currentTime,.5)}else this.weatherGain&&this.weatherGain.gain.setTargetAtTime(.001,this.ctx.currentTime,.5)}playShutter(){if(!this.ctx||!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type="sine",t.frequency.setValueAtTime(240,e),t.frequency.exponentialRampToValueAtTime(60,e+.06);const n=this.ctx.createGain();n.gain.setValueAtTime(.25,e),n.gain.exponentialRampToValueAtTime(.001,e+.07),t.connect(n),n.connect(this.categories.machine),t.start(e),t.stop(e+.08)}playMotor(e=.3){if(!this.ctx||!this.initialized)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="triangle",n.frequency.setValueAtTime(65,t),n.frequency.linearRampToValueAtTime(75,t+e*.5),n.frequency.linearRampToValueAtTime(60,t+e);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(120,t);const a=this.ctx.createGain();a.gain.setValueAtTime(.001,t),a.gain.linearRampToValueAtTime(.12,t+.05),a.gain.setValueAtTime(.12,t+e-.05),a.gain.linearRampToValueAtTime(.001,t+e),n.connect(i),i.connect(a),a.connect(this.categories.machine),n.start(t),n.stop(t+e)}playCoins(){if(!this.ctx||!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type="sine",t.frequency.setValueAtTime(880,e),t.frequency.exponentialRampToValueAtTime(1200,e+.1);const n=this.ctx.createGain();n.gain.setValueAtTime(.15,e),n.gain.exponentialRampToValueAtTime(.001,e+.15),t.connect(n),n.connect(this.categories.sfx),t.start(e),t.stop(e+.15)}playClick(){if(!this.ctx||!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type="sine",t.frequency.setValueAtTime(360,e),t.frequency.exponentialRampToValueAtTime(180,e+.03);const n=this.ctx.createGain();n.gain.setValueAtTime(.08,e),n.gain.exponentialRampToValueAtTime(.001,e+.03),t.connect(n),n.connect(this.categories.sfx),t.start(e),t.stop(e+.035)}setMasterVolume(e){this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(Math.max(0,Math.min(1,e)),this.ctx.currentTime,.05)}setCategory(e,t){const n=this.categories[e];n&&this.ctx&&n.gain.setTargetAtTime(Math.max(0,Math.min(1,t)),this.ctx.currentTime,.05)}dispose(){this.natureTimer&&(clearTimeout(this.natureTimer),this.natureTimer=null),this.ctx&&(this.ctx.close(),this.initialized=!1)}}const _i=new Vt(0,0,0,"YXZ"),xi=new R,d0={type:"change"},u0={type:"lock"},f0={type:"unlock"},cl=Math.PI/2;class p0 extends Im{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=m0.bind(this),this._onPointerlockChange=g0.bind(this),this._onPointerlockError=v0.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;xi.setFromMatrixColumn(t.matrix,0),xi.crossVectors(t.up,xi),t.position.addScaledVector(xi,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;xi.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(xi,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function m0(s){if(this.enabled===!1||this.isLocked===!1)return;const e=s.movementX||s.mozMovementX||s.webkitMovementX||0,t=s.movementY||s.mozMovementY||s.webkitMovementY||0,n=this.object;_i.setFromQuaternion(n.quaternion),_i.y-=e*.002*this.pointerSpeed,_i.x-=t*.002*this.pointerSpeed,_i.x=Math.max(cl-this.maxPolarAngle,Math.min(cl-this.minPolarAngle,_i.x)),n.quaternion.setFromEuler(_i),this.dispatchEvent(d0)}function g0(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(u0),this.isLocked=!0):(this.dispatchEvent(f0),this.isLocked=!1)}function v0(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}class _0{constructor(e,t,n){this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.isSprinting=!1,this.isAltHeld=!1,this.velocity=new R,this.direction=new R,this.playerHeight=1.7,this.walkSpeed=5,this.telescopeModeOrigin=new R,this.exposureCycle=[5,15,30,60,120,300],this.camera=e,this.canvas=t,this.scene=n,this.controls=new p0(this.camera,document.body),this.scene.add(this.controls.getObject()),this.controls.getObject().position.y=this.playerHeight,this.crosshair=document.createElement("div"),this.crosshair.className="crosshair",document.getElementById("ui-overlay")?.appendChild(this.crosshair),this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onWheel=this.onWheel.bind(this),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.onKeyUp),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("wheel",this.onWheel,{passive:!1}),window.addEventListener("contextmenu",a=>a.preventDefault()),window.addEventListener("blur",()=>{this.isAltHeld=!1});const i=a=>{if(a.button!==0||this.isAltHeld||this.isAnyModalActive())return;const r=a.target;if(r&&r.closest(".hud-panel, .studio-panel, button, input, select, .guide-badge, .money-badge, .weather-badge, .audio-badge, .story-box, .codex-panel, .lightbox-content"))return;const o=oe.getState().gameMode;(o===Pe.Walk||o===Pe.Telescope)&&!this.controls.isLocked&&this.controls.lock()};this.canvas.addEventListener("mousedown",i),window.addEventListener("click",i),this.unsubscribe=oe.subscribe((a,r)=>{a.gameMode!==r.gameMode&&this.handleModeChange(a.gameMode,r.gameMode)})}isAnyModalActive(){const e=[".codex-panel",".lightbox-overlay",".guide-modal",".location-modal",".time-reversal-panel",".audio-modal",".story-modal"];for(const t of e){const n=document.querySelector(t);if(n&&n.style.display!=="none"&&getComputedStyle(n).display!=="none")return!0}return!1}handleModeChange(e,t){e===Pe.Walk?(this.crosshair.style.display="block",t===Pe.Telescope&&(this.camera.position.copy(this.telescopeModeOrigin),this.camera.fov=60,this.camera.updateProjectionMatrix())):e===Pe.Telescope?(this.crosshair.style.display="none",this.telescopeModeOrigin.copy(this.camera.position),setTimeout(()=>{oe.getState().gameMode===Pe.Telescope&&!this.controls.isLocked&&this.controls.lock()},50)):e===Pe.Studio&&(this.crosshair.style.display="none",this.controls.unlock())}onKeyDown(e){const t=oe.getState(),n=t.gameMode;if(e.key==="Alt"||e.code==="AltLeft"||e.code==="AltRight"){e.preventDefault(),this.isAltHeld||(this.isAltHeld=!0,this.controls.unlock());return}if(e.code==="Escape"){if(this.isAnyModalActive())return;if(n===Pe.Telescope||n===Pe.Studio){t.setGameMode(Pe.Walk);return}}if(n===Pe.Walk)switch(e.code){case"KeyW":this.moveForward=!0;break;case"KeyA":this.moveLeft=!0;break;case"KeyS":this.moveBackward=!0;break;case"KeyD":this.moveRight=!0;break;case"ShiftLeft":case"ShiftRight":this.isSprinting=!0;break;case"KeyE":t.setGameMode(Pe.Telescope);break;case"KeyF":t.setGameMode(Pe.Studio);break}else if(n===Pe.Telescope)switch(e.code){case"Space":case"KeyE":document.dispatchEvent(new CustomEvent("capture-photo"));break;case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":this.handleTelescopeSlew(e.code),document.dispatchEvent(new CustomEvent("telescope-slew"));break}switch(e.code){case"Digit1":t.setTimeScale(1);break;case"Digit2":t.setTimeScale(10);break;case"Digit3":t.setTimeScale(60);break;case"Digit4":t.setTimeScale(300);break;case"Digit5":t.setTimeScale(1e3);break;case"KeyP":t.toggleTimePause();break;case"KeyC":t.toggleConstellations();break;case"KeyN":t.toggleStarNames();break;case"KeyM":t.toggleMute();break;case"KeyU":case"KeyH":t.toggleUIVisibility();break}}handleTelescopeSlew(e){const t=oe.getState(),i=.5*(t.currentFov/60);let a=t.telescopeRa,r=t.telescopeDec;e==="ArrowUp"&&(r+=i),e==="ArrowDown"&&(r-=i),e==="ArrowLeft"&&(a-=i/15),e==="ArrowRight"&&(a+=i/15),r=Math.max(-90,Math.min(90,r)),a<0&&(a+=24),a>=24&&(a-=24),t.setTelescopePointing(a,r)}onKeyUp(e){if(e.key==="Alt"||e.code==="AltLeft"||e.code==="AltRight"){e.preventDefault(),this.isAltHeld=!1;const n=oe.getState().gameMode;(n===Pe.Walk||n===Pe.Telescope)&&!this.isAnyModalActive()&&!this.controls.isLocked&&this.controls.lock();return}switch(e.code){case"KeyW":this.moveForward=!1;break;case"KeyA":this.moveLeft=!1;break;case"KeyS":this.moveBackward=!1;break;case"KeyD":this.moveRight=!1;break;case"ShiftLeft":case"ShiftRight":this.isSprinting=!1;break}}onMouseMove(e){if(oe.getState().gameMode===Pe.Telescope&&(this.controls.isLocked||e.buttons>0)){const n=oe.getState(),i=n.currentFov/60,a=e.buttons===2?.25:1;let r=n.telescopeRa,o=n.telescopeDec;r-=e.movementX*.0018*i*a,o+=e.movementY*.025*i*a,o=Math.max(-90,Math.min(90,o)),r<0&&(r+=24),r>=24&&(r-=24),n.setTelescopePointing(r,o),(Math.abs(e.movementX)>2||Math.abs(e.movementY)>2)&&document.dispatchEvent(new CustomEvent("telescope-slew"))}}onWheel(e){const t=oe.getState();if(t.gameMode===Pe.Telescope){e.preventDefault();let n=t.currentFov;n*=e.deltaY>0?1.1:.9,n=Math.max(.2,Math.min(60,n)),t.setFov(n)}}update(e){if(oe.getState().gameMode===Pe.Walk&&this.controls.isLocked){this.velocity.x-=this.velocity.x*10*e,this.velocity.z-=this.velocity.z*10*e,this.direction.z=Number(this.moveForward)-Number(this.moveBackward),this.direction.x=Number(this.moveRight)-Number(this.moveLeft),this.direction.normalize();const n=this.isSprinting?this.walkSpeed*2:this.walkSpeed;(this.moveForward||this.moveBackward)&&(this.velocity.z-=this.direction.z*n*10*e),(this.moveLeft||this.moveRight)&&(this.velocity.x-=this.direction.x*n*10*e),this.controls.moveRight(-this.velocity.x*e),this.controls.moveForward(-this.velocity.z*e),this.controls.getObject().position.y=this.playerHeight}}dispose(){this.unsubscribe(),document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("keyup",this.onKeyUp),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("wheel",this.onWheel),this.controls.disconnect(),this.crosshair.remove()}}class x0{constructor(e){this.group=new zt;const t=250,n=new ea(t,64);n.rotateX(-Math.PI/2);const i=document.createElement("canvas");i.width=512,i.height=512;const a=i.getContext("2d");a.fillStyle="#0f1a0e",a.fillRect(0,0,512,512);for(let d=0;d<4e3;d++){const u=Math.random()*512,p=Math.random()*512,g=Math.random()*2+1,v=Math.random()>.6?"rgba(35, 45, 30, 0.4)":"rgba(15, 20, 15, 0.5)";a.fillStyle=v,a.beginPath(),a.arc(u,p,g,0,Math.PI*2),a.fill()}const r=new At(i);r.wrapS=Zi,r.wrapT=Zi,r.repeat.set(16,16);const o=new Ct({map:r,color:2240544,roughness:.95,metalness:.05,side:Xt}),l=new He(n,o);l.position.y=-.2,l.receiveShadow=!0,this.group.add(l);const c=new Ct({color:330258,roughness:.98,flatShading:!0}),h=24;for(let d=0;d<h;d++){const u=d/h*Math.PI*2,p=320+d%3*40,g=30+Math.sin(d*3)*18+Math.random()*10,v=60+Math.random()*30,m=new ta(v,g,5),f=new He(m,c);f.position.set(Math.cos(u)*p,g*.45,Math.sin(u)*p),this.group.add(f)}e.add(this.group)}setVisible(e){this.group.visible=e}dispose(){this.group.parent?.remove(this.group)}}class M0{constructor(e){this.interactionDistance=4,this.group=new zt,this.group.position.set(0,0,-3.5);const t=new Ct({color:1844019,roughness:.85,metalness:.15}),n=new Ft(1.6,1.7,.08,32),i=new He(n,t);i.position.y=.04,i.receiveShadow=!0,this.group.add(i);const a=new Kn({color:959977}),r=new zr(1.48,1.52,32);r.rotateX(-Math.PI/2);const o=new He(r,a);o.position.y=.082,this.group.add(o);const l=new yi(3718648,.8,4);l.position.set(1.3,.2,0),this.group.add(l);const c=new yi(3718648,.8,4);c.position.set(-1.3,.2,0),this.group.add(c);const h=new Ct({color:2237996,metalness:.85,roughness:.25}),d=new Ct({color:1580066,metalness:.9,roughness:.2}),u=new Ct({color:16317180,metalness:.2,roughness:.15}),p=new Ct({color:15381256,metalness:.9,roughness:.25});for(let W=0;W<3;W++){const $=new Ft(.025,.02,1.4),X=new He($,h);X.position.y=.7;const Q=W/3*Math.PI*2;X.position.x=Math.cos(Q)*.38,X.position.z=Math.sin(Q)*.38,X.rotation.x=.28,X.rotation.y=-Q,this.group.add(X)}const g=new Ft(.22,.22,.02,3),v=new He(g,d);v.position.y=.65,this.group.add(v);const m=new Ft(.1,.13,.28,16),f=new He(m,d);f.position.y=1.4,this.group.add(f);const T=new Ft(.012,.012,.45),E=new He(T,h);E.position.set(0,1.2,-.22),E.rotation.x=Math.PI/4,this.group.add(E);const y=new Ft(.07,.07,.08,16),N=new He(y,d);N.position.set(0,1.05,-.37),N.rotation.x=Math.PI/4,this.group.add(N),this.tubeGroup=new zt,this.tubeGroup.position.set(0,1.55,0);const A=new Ft(.13,.13,1.05,24);A.rotateX(Math.PI/2);const w=new He(A,u);this.tubeGroup.add(w);const P=new He(new Vr(.132,.012,8,24),p);P.position.z=.525,this.tubeGroup.add(P);const S=new ea(.125,24),x=new Cm({color:22015,metalness:.1,roughness:.05,transmission:.6,transparent:!0,opacity:.9}),C=new He(S,x);C.position.z=.52,this.tubeGroup.add(C);const k=new He(new Ft(.025,.025,.28,12),d);k.geometry.rotateX(Math.PI/2),k.position.set(.11,.16,0),this.tubeGroup.add(k);const F=new Ft(.025,.025,.12,12);this.eyepieceMesh=new He(F,p),this.eyepieceMesh.position.set(0,.13,-.45),this.tubeGroup.add(this.eyepieceMesh),this.eyepieceGlow=new yi(15680580,.8,2),this.eyepieceMesh.add(this.eyepieceGlow),this.group.add(this.tubeGroup),this.beaconLight=new yi(3718648,1.2,8),this.beaconLight.position.set(0,2.2,0),this.group.add(this.beaconLight),e.add(this.group)}isPlayerNear(e){return this.group.position.distanceTo(e)<this.interactionDistance}getPosition(){return this.group.position.clone()}updatePointing(e,t,n,i){const a=i-e;this.tubeGroup.rotation.order="YXZ",this.tubeGroup.rotation.y=a*Math.PI/12,this.tubeGroup.rotation.x=t*Math.PI/180}update(e){this.isPlayerNear(e)?this.eyepieceGlow.intensity=1.2:this.eyepieceGlow.intensity=.5}getEyepieceWorldPosition(){const e=new R;return this.eyepieceMesh.getWorldPosition(e),e}setVisible(e){this.group.visible=e}dispose(){this.group.parent?.remove(this.group)}}class y0{constructor(e){this.group=new zt,this.group.position.set(50,-10,50),this.group.visible=!1;const t=new Ct({color:2764084,side:Et,roughness:.8});new Ct({color:2038036,side:Xt,roughness:.7});const n=new sn(8,3,6),i=new He(n,t);i.position.y=1.5,this.group.add(i);const a=new sn(2,.1,1),r=new Ct({color:4861464,roughness:.6}),o=new He(a,r);o.position.set(0,.8,-2),this.group.add(o);const l=new sn(.8,.5,.05),c=new Ct({color:1118481,metalness:.8,roughness:.2}),h=new He(l,c);h.position.set(0,1.1,-2.2),this.group.add(h);const d=new Mn(.75,.45),u=new Kn({color:3373055}),p=new He(d,u);p.position.set(0,1.1,-2.17),this.group.add(p);const g=new yi(16760438,2,12);g.position.set(0,2.5,0),this.group.add(g),e.add(this.group),this.entranceGroup=new zt,this.entranceGroup.position.set(-10,0,8);const v=new Ct({color:3022872,roughness:.85}),m=new sn(3.5,2.4,3.5),f=new He(m,v);f.position.y=1.2,this.entranceGroup.add(f);const T=new Ct({color:1580584,roughness:.7}),E=new ta(3,1.2,4);E.rotateY(Math.PI/4);const y=new He(E,T);y.position.y=2.9,this.entranceGroup.add(y);const N=new Ct({color:1708556,roughness:.9}),A=new Mn(.9,1.8),w=new He(A,N);w.position.set(0,.9,1.76),this.entranceGroup.add(w);const P=new Kn({color:16764006}),S=new Mn(.8,.8),x=new He(S,P);x.position.set(1.1,1.3,1.76),this.entranceGroup.add(x);const C=new Ft(.08,.08,.18,6),k=new Kn({color:16755268}),F=new He(C,k);F.position.set(-.8,1.6,1.85),this.entranceGroup.add(F);const W=new yi(16750899,1.5,8);W.position.set(-.8,1.5,2),this.entranceGroup.add(W),e.add(this.entranceGroup)}setVisible(e){this.group.visible=e}isPlayerNear(e){return this.entranceGroup.position.distanceTo(e)<4.5}getPosition(){return this.entranceGroup.position.clone()}dispose(){this.group.parent?.remove(this.group),this.entranceGroup.parent?.remove(this.entranceGroup)}}class S0{constructor(){this.minFov=.5,this.maxFov=45,this.limitingMagnitude=6,this.trackingAccuracy=1,this.chromaticAberration=.05,this.exposureGain=1,this.unsubscribe=oe.subscribe(e=>{this.update(e)}),this.update(oe.getState())}update(e){const t=e.telescopeLevel||1;this.minFov=Math.max(.1,5/t),this.maxFov=45,this.limitingMagnitude=5+t*2,this.trackingAccuracy=1/t,this.chromaticAberration=.05/t,this.exposureGain=1+t*.5}getEffectiveFovRange(){return[this.minFov,this.maxFov]}getLimitingMagnitude(){return this.limitingMagnitude}getTrackingAccuracy(){return this.trackingAccuracy}getChromaticAberration(){return this.chromaticAberration}getExposureGain(){return this.exposureGain}dispose(){this.unsubscribe()}}class b0{constructor(e,t,n){this.bufferIdx=0,this.isExposingFlag=!1,this.startTime=0,this.duration=0,this.sampleCount=0,this.renderer=e,this.width=t,this.height=n;const i={type:an,format:$t,magFilter:kt,minFilter:kt};this.rtA=new Lt(t,n,i),this.rtB=new Lt(t,n,i),this.frameTarget=new Lt(t,n,i),this.blendScene=new Xl,this.blendCamera=new Qs(-1,1,1,-1,0,1),this.blendMaterial=new ft({uniforms:{uCurrentFrame:{value:null},uAccumulatedFrame:{value:null},uSampleCount:{value:1},uExposureGain:{value:1}},vertexShader:`
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
        varying vec2 vUv;
        
        void main() {
          vec4 current = texture2D(uCurrentFrame, vUv) * uExposureGain;
          vec4 accumulated = texture2D(uAccumulatedFrame, vUv);
          
          vec4 result = mix(accumulated, current, 1.0 / uSampleCount);
          gl_FragColor = result;
        }
      `}),this.quad=new He(new Mn(2,2),this.blendMaterial),this.blendScene.add(this.quad),this.resultCanvas=document.createElement("canvas")}startExposure(e){this.isExposingFlag=!0,this.duration=0,this.startTime=performance.now(),this.sampleCount=0,this.renderer.setRenderTarget(this.rtA),this.renderer.clear(),this.renderer.setRenderTarget(this.rtB),this.renderer.clear(),this.renderer.setRenderTarget(null),this.bufferIdx=0}getElapsedSeconds(){return this.isExposingFlag?(performance.now()-this.startTime)/1e3:0}getSampleCount(){return this.sampleCount}accumulate(e,t,n=1){if(!this.isExposingFlag)return;this.sampleCount++,this.renderer.setRenderTarget(this.frameTarget),this.renderer.render(e,t);const i=this.bufferIdx===0?this.rtA:this.rtB,a=this.bufferIdx===0?this.rtB:this.rtA;this.blendMaterial.uniforms.uCurrentFrame.value=this.frameTarget.texture,this.blendMaterial.uniforms.uAccumulatedFrame.value=i.texture,this.blendMaterial.uniforms.uSampleCount.value=this.sampleCount,this.blendMaterial.uniforms.uExposureGain.value=n,this.renderer.setRenderTarget(a),this.renderer.render(this.blendScene,this.blendCamera),this.renderer.setRenderTarget(null),this.bufferIdx=1-this.bufferIdx}finishExposure(){const e=this.getElapsedSeconds();this.isExposingFlag=!1;const t=this.bufferIdx===0?this.rtA:this.rtB;this.resultCanvas.width=this.width,this.resultCanvas.height=this.height;const n=this.resultCanvas.getContext("2d");if(!n)return e;const i=new Uint16Array(this.width*this.height*4);this.renderer.readRenderTargetPixels(t,0,0,this.width,this.height,i);const a=n.createImageData(this.width,this.height);for(let o=0;o<i.length;o++)a.data[o]=Math.min(255,Math.max(0,wh.fromHalfFloat(i[o])*255));const r=n.createImageData(this.width,this.height);for(let o=0;o<this.height;o++)for(let l=0;l<this.width;l++){const c=(o*this.width+l)*4,h=((this.height-1-o)*this.width+l)*4;r.data[h]=a.data[c],r.data[h+1]=a.data[c+1],r.data[h+2]=a.data[c+2],r.data[h+3]=a.data[c+3]}return n.putImageData(r,0,0),e}getResultAsDataUrl(){return this.resultCanvas.toDataURL("image/jpeg",.85)}isExposing(){return this.isExposingFlag}getProgress(){return this.isExposingFlag?1:0}getAccumulatedTexture(){return(this.bufferIdx===0?this.rtA:this.rtB).texture}resize(e,t){this.width=e,this.height=t,this.rtA.setSize(e,t),this.rtB.setSize(e,t),this.frameTarget.setSize(e,t)}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.frameTarget.dispose(),this.blendMaterial.dispose()}}const Ql={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class as{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const E0=new Qs(-1,1,1,-1,0,1);class T0 extends xt{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}}const w0=new T0;class Jl{constructor(e){this._mesh=new He(w0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,E0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ar extends as{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=es.clone(e.uniforms),this.material=new ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Jl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class hl extends as{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),a.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(i.EQUAL,1,4294967295),a.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),a.buffers.stencil.setLocked(!0)}}class A0 extends as{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class C0{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ae);this._width=n.width,this._height=n.height,t=new Lt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:an}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ar(Ql),this.copyPass.material.blending=vn,this.clock=new Kl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,a=this.passes.length;i<a;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}hl!==void 0&&(r instanceof hl?n=!0:r instanceof A0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class R0 extends as{constructor(e,t,n=null,i=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ue}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=i}}const P0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Di extends as{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ae(e.x,e.y):new Ae(256,256),this.clearColor=new Ue(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Lt(a,r,{type:an}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new Lt(a,r,{type:an});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const p=new Lt(a,r,{type:an});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),a=Math.round(a/2),r=Math.round(r/2)}const o=P0;this.highPassUniforms=es.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ft({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Ae(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Ql;this.copyUniforms=es.clone(h.uniforms),this.blendMaterial=new ft({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ti,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ue,this.oldClearAlpha=1,this.basic=new Kn,this.fsQuad=new Jl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,i),this.renderTargetsVertical[a].setSize(n,i),this.separableBlurMaterials[a].uniforms.invSize.value=new Ae(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Di.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Di.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ft({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ae(.5,.5)},direction:{value:new Ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Di.BlurDirectionX=new Ae(1,0);Di.BlurDirectionY=new Ae(0,1);const L0={uniforms:{tDiffuse:{value:null},darkness:{value:.3},offset:{value:1}},vertexShader:`
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
  `},D0={uniforms:{tDiffuse:{value:null},amount:{value:0}},vertexShader:`
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
  `};class I0{constructor(e,t,n){this.composer=new C0(e),this.renderPass=new R0(t,n),this.composer.addPass(this.renderPass);const i=new Ae(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2));this.bloomPass=new Di(i,.35,.2,.92),this.composer.addPass(this.bloomPass),this.vignettePass=new Ar(L0),this.vignettePass.uniforms.darkness.value=.25,this.composer.addPass(this.vignettePass),this.caPass=new Ar(D0),this.caPass.uniforms.amount.value=0,this.composer.addPass(this.caPass)}setTelescopeMode(e,t,n=-.5){const i=n>.02;e?(this.bloomPass.strength=i?.05:.55,this.bloomPass.threshold=i?.99:.88,this.vignettePass.uniforms.darkness.value=1,this.caPass.uniforms.amount.value=Math.min(t*.005,.015)):(this.bloomPass.strength=i?.02:.25,this.bloomPass.threshold=i?.99:.93,this.vignettePass.uniforms.darkness.value=.2,this.caPass.uniforms.amount.value=0)}render(){this.composer.render()}resize(e,t){this.composer.setSize(e,t),this.bloomPass.setSize(Math.floor(e/2),Math.floor(t/2))}dispose(){this.composer.passes.forEach(e=>e.dispose?.())}}class U0{constructor(e,t){this.isHoldingRightClick=!1,this.targetFov=60,this.BINO_FOV=10,this.DEFAULT_FOV=60,this.camera=e,this.setupEvents()}setupEvents(){window.addEventListener("mousedown",e=>{e.button===2&&oe.getState().gameMode===Pe.Walk&&(this.isHoldingRightClick=!0,this.targetFov=this.BINO_FOV)}),window.addEventListener("mouseup",e=>{e.button===2&&this.isHoldingRightClick&&(this.isHoldingRightClick=!1,this.targetFov=this.DEFAULT_FOV)}),oe.subscribe((e,t)=>{e.gameMode!==t.gameMode&&(this.isHoldingRightClick=!1,this.targetFov=this.DEFAULT_FOV,e.gameMode===Pe.Walk&&(this.camera.fov=this.DEFAULT_FOV,this.camera.updateProjectionMatrix()))})}update(e){oe.getState().gameMode===Pe.Walk&&(Math.abs(this.camera.fov-this.targetFov)>.05?(this.camera.fov+=(this.targetFov-this.camera.fov)*Math.min(1,e*14),this.camera.updateProjectionMatrix()):this.camera.fov!==this.targetFov&&(this.camera.fov=this.targetFov,this.camera.updateProjectionMatrix()))}get active(){return this.isHoldingRightClick}dispose(){this.isHoldingRightClick=!1,this.camera.fov=this.DEFAULT_FOV,this.camera.updateProjectionMatrix()}}const Yi={};function N0(s){const e=Yi[s]||0;return e===0?1:e===1?.6:e===2?.25:0}class F0{constructor(){this.photoIdCounter=0}capturePhoto(e,t,n,i,a){const r=oe.getState(),o=Math.max(.5,a??r.exposureDuration??5);e.render(t,n);const l=e.domElement.toDataURL("image/jpeg",.85),c=i?.id||i?.name||"star_field",h=N0(c);Yi[c]=(Yi[c]||0)+1;const d=this.calculateQuality(i,r,o),u=this.getQualityGrade(d),p=this.calculatePrice(u,i?.type||Ot.StarField),g=Math.floor(p*h),v={id:`photo_${++this.photoIdCounter}_${Date.now()}`,imageDataUrl:l,targetName:i?.name||"未知星野",targetType:i?.type||Ot.StarField,exposureSeconds:parseFloat(o.toFixed(1)),telescopeLevel:r.telescopeLevel||1,weatherCondition:r.weather,locationId:r.currentLocation?.id||"hehuanshan",score:d,quality:u,sellPrice:g,sold:!1,timestamp:new Date,repeatPenaltyFactor:h};if(r.addPhoto(v),h<1){const m=g===0?`市場飽和！${v.targetName} 已無人願購買`:`重複拍攝！價值降至 $${g}（原價 $${p}）`;document.dispatchEvent(new CustomEvent("show-notification",{detail:{message:m,type:"warning"}}))}return document.dispatchEvent(new CustomEvent("photo-captured",{detail:{photo:v,targetInfo:i}})),v}calculateQuality(e,t,n=5){let i=45,a=1;t.weather===Ge.PartlyCloudy?a=.6:t.weather===Ge.Cloudy?a=.2:t.weather===Ge.Rainy&&(a=0),i*=a;const r=t.telescopeLevel||1;i+=r*8,n<2?i-=15:i+=Math.min(26,Math.log2(n+1)*4.8),e?.difficulty&&(i+=e.difficulty*5);const o=t.currentLocation?.lightPollution??.05;return i-=o*20,Math.max(10,Math.min(100,Math.round(i)))}getQualityGrade(e){return e>=90?it.S:e>=75?it.A:e>=55?it.B:e>=35?it.C:it.D}calculatePrice(e,t){const n={[Ot.StarField]:{[it.D]:5,[it.C]:15,[it.B]:40,[it.A]:80,[it.S]:150},[Ot.Planet]:{[it.D]:20,[it.C]:50,[it.B]:120,[it.A]:250,[it.S]:500},[Ot.Messier]:{[it.D]:50,[it.C]:120,[it.B]:300,[it.A]:600,[it.S]:1200},[Ot.SpecialEvent]:{[it.D]:100,[it.C]:250,[it.B]:600,[it.A]:1200,[it.S]:2500}},i=n[t]||n[Ot.StarField];return i[e]||i[it.D]}getPhotoStats(){const t=oe.getState().photos||[],n=t.length,i=t.filter(r=>r.sold).reduce((r,o)=>r+o.sellPrice,0),a=t.reduce((r,o)=>o.score>r?o.score:r,0);return{totalPhotos:n,totalEarned:i,bestQuality:a}}resetRepeatCounts(){Object.keys(Yi).forEach(e=>delete Yi[e])}}const Hn={chen:{name:"陳伯",role:"合歡山老氣象員 · 前天文台技師",avatarIcon:"👴",color:"#fbbf24"},lin:{name:"星際旅人 Lin",role:"天文攝影論壇版主 · 巡天愛好者",avatarIcon:"🌌",color:"#38bdf8"},director:{name:"張弘道館長",role:"國家天文台名譽台長",avatarIcon:"🔭",color:"#a855f7"},sophie:{name:"蘇菲主編",role:"《國際天文攝影》亞洲特刊總編",avatarIcon:"📸",color:"#ec4899"},alan:{name:"艾倫研究員",role:"跨國深空巡天計畫通訊員",avatarIcon:"🛰️",color:"#34d399"}},ts=[{id:"ch0_first_light",chapter:0,title:"第一道星光 (First Light)",character:Hn.chen,introDialogue:["「孩子，歡迎來到合歡山！這座觀測木屋已經很多年沒有新主人了。」陳伯端著一杯熱茶走進院子。","「看到那台老舊的 60mm 折射望遠鏡了嗎？那是當年我初學天文時用的，保養得還很好。」","「今晚天空很乾淨，去拍下你的第一張星空照片吧！走過去按 E 對準夜空，按下空白鍵開始長曝光，讓宇宙微弱的光子凝聚在感光元件上。」"],completeDialogue:["「太棒了！這就是天文攝影師的第一步——捕捉到了屬於你的第一道星光！」陳伯笑著拍了拍你的肩膀。","「光子累積的感覺很神奇對吧？宇宙從不吝嗇展現美麗，只看你願不願意靜下心來等待。」"],storySummary:"繼承了合歡山觀測小屋，在老氣象員陳伯的指導下完成人生第一張星空攝影。",starHoppingTip:"【陳伯傳授】：抬頭看向南方天空，將望遠鏡對準任何天區，手動長曝光 5 秒以上即可。",objectives:[{type:"capture_any",description:"操作望遠鏡完成任意一張星空照片"}],rewards:{money:100}},{id:"ch0_find_orion",chapter:0,title:"獵戶佩劍上的玫瑰 (M42 獵戶座大星雲)",character:Hn.chen,introDialogue:["陳伯翻開一本邊角泛黃的手繪星圖，手指指著冬季星空最璀璨的一角：","「你看獵戶座腰帶那三顆連星，下方佩劍的位置，藏著一朵巨大的宇宙玫瑰——M42 獵戶座大星雲。」","「【觀測時段提醒】：獵戶座是秋冬季代表天體。夏末初秋要到【深夜 01:30 ~ 03:00】才會從東方地平線升起。如果你現在看不到，記得按 R 或 T 鍵開啟時空面板，將時間快轉到深夜！」","「【認星口訣】：按 C 開啟星座連線，在東南方找到排成一直線的三顆腰帶三星，往正下方垂直看有三顆微弱的小星（佩劍），中間那顆就是 M42！」"],completeDialogue:["「看啊！那粉紅色的氣體卷雲與中心的四合星！你的對焦和曝光掌握得比我想像的還要出色！」","「我把你這張 M42 的照片傳到全台天文攝影論壇了，這下子肯定會引來不少人的關注。」"],storySummary:"在獵戶座佩劍處精確捕捉到著名的 M42 恆星育嬰室，照片在天文論壇引起了廣泛討論。",starHoppingTip:"【陳伯傳授】：M42 為秋冬季天體，深夜 01:30 後升起（可按 R/T 快轉時間）。按 C 開啟連線，順著獵戶腰帶三星垂直向下找到佩劍中間即是。",objectives:[{type:"capture_target",targetId:"M42",description:"拍攝 M42 獵戶座大星雲"}],rewards:{money:300},prerequisiteQuestId:"ch0_first_light"},{id:"ch1_andromeda",chapter:1,title:"250萬光年的凝望 (M31 仙女座星系)",character:Hn.lin,introDialogue:["【論壇私訊】星際旅人 Lin：「嗨！我在論壇首頁看到你拍的 M42 了，在合歡山拍的吧？視寧度真乾淨！」","「自我介紹一下，我是論壇版主 Lin。既然你已經掌握了星雲，那敢不敢挑戰真正的跨星系目標——仙女座大星系 M31？」","「【觀測時段】：仙女座星系在秋季傍晚（20:00 ~ 02:00）就已經高掛東北方夜空，幾乎整夜都可以觀測！」","「【認星口訣】：找到北天天空大大的『W 形仙后座』，順著中間頂點往右下方（飛馬座方向）延伸約兩個星座寬度，那團紡錘狀星系就是 M31！」"],completeDialogue:["【論壇私訊】星際旅人 Lin：「天啊……這解析度太驚人了！我甚至能看到 M31 旋臂上的暗黑塵埃帶！」","「你絕對有極高的天文攝影天賦。接下來正好有一場全台天文盛事，你非參加不可！」"],storySummary:"接受天文論壇版主 Lin 的挑戰，跨越 250 萬光年成功拍攝仙女座星系的壯麗旋臂。",starHoppingTip:"【Lin 傳授】：秋季 20:00 ~ 02:00 在東北方高掛。找到「W 形仙后座」，順著頂點向右下方（飛馬座方向）延伸即可找到。",objectives:[{type:"capture_target",targetId:"M31",description:"拍攝 M31 仙女座星系（評級 B 級以上）",minQuality:"B"}],rewards:{money:600},prerequisiteQuestId:"ch0_find_orion"},{id:"ch1_collector",chapter:1,title:"梅西耶馬拉松 (Messier Marathon)",character:Hn.lin,introDialogue:["【論壇私訊】星際旅人 Lin：「一年一度的『梅西耶馬拉松季』正式開跑了！」","「十八世紀法國天文學家梅西耶為了不把星雲誤認為彗星，編製了 110 個著名的深空天體。現在全世界觀星者都在比誰收集得快。」","「【推薦目標與時段】：金牛座的『M45 昴宿星團（七姊妹，秋冬季 22:00 後）』、武仙座的『M13 球狀星團（夏季 20:00~02:00）』、巨蟹座的『M44 蜂巢星團（冬春季）』都是極佳目標！按 G 打開圖鑑可以隨時查看各天體的最佳觀測時間！」","「收集 5 個不同的梅西耶天體，我為你爭取阿里山頂級觀測站的通行證！」"],completeDialogue:["【論壇私訊】星際旅人 Lin：「太不可思議了！短短時間內你居然收集了 5 個完全不同類型的梅西耶天體！」","「阿里山天文學會已經審核通過你的資格，高海拔暗空觀測站現在隨時為你敞開大門！」"],storySummary:"參加梅西耶馬拉松並成功拍得 5 個不同天體，一躍成為論壇名人並獲贈觀測站通行證。",starHoppingTip:"【Lin 傳授】：按 G 開啟圖鑑，可隨時查看天體最佳觀測時段（例如 M45、M13、M44），善用 R/T 調整時間至適當季節與深夜！",objectives:[{type:"capture_count",targetType:"messier",count:5,description:"在圖鑑中收集 5 個不同的梅西耶天體"}],rewards:{money:1200,unlockLocation:"alishan"},prerequisiteQuestId:"ch1_andromeda"},{id:"ch2_masterpiece",chapter:2,title:"極限視寧度下的 S 級神作",character:Hn.director,introDialogue:["一輛掛著天文台公務牌的四驅車停在小屋前，走下來的是高山天文台名譽台長張弘道教授。","「年輕人，你的作品在學界傳開了。但我想知道，你是靠運氣，還是真正掌握了光學極限？」","「【大師訣竅】：真正的 S 級神作需要三要素——在極低光害的地點（按 L 切換合歡山或阿里山）、晴朗無雲的深夜、以及 30 秒以上的扎實長曝光。證明給我看吧。」"],completeDialogue:["張教授凝視著螢幕上的相片，久久沒有說話，隨後露出由衷的微笑：","「完美無瑕……動態範圍、核心明暗過渡與色彩飽和度都達到了極致！這份天文攝影大師的認可，你當之無愧。」"],storySummary:"在張弘道教授嚴苛的考驗下，挑戰極限拍攝出 90 分以上的 S 級天體照片。",starHoppingTip:"【張館長傳授】：前往海拔最高、光害最低的觀測地點，在晴朗深夜將望遠鏡精準對焦深空天體，長曝光 30 秒以上即可衝擊 S 級評分！",objectives:[{type:"quality_min",minQuality:"S",description:"拍攝一張品質達到 S 級（90分以上）的照片"}],rewards:{money:2500},prerequisiteQuestId:"ch1_collector"},{id:"ch2_nebula_expert",chapter:2,title:"星雲三部曲：生與死的輪迴",character:Hn.sophie,introDialogue:["【國際郵件】蘇菲主編：「親愛的攝影師，我是《國際天文攝影》雜誌的蘇菲主編。」","「我們正在策劃亞洲特刊封面專題《恆星的生老病死》，需要三種極具代表性的星雲：」","「【認星與時段】：1. M1 蟹狀星雲位於金牛座角尖（秋冬季 23:00 後）；2. M57 環狀星雲位於天琴座織女星下方（夏季 20:00~02:00）；3. M27 啞鈴星雲位於天鵝座與天箭座上方（夏秋季 20:00~01:00）。」","「集齊這三張珍貴影像，雜誌社將提供 $3,500 特約稿費！」"],completeDialogue:["【國際郵件】蘇菲主編：「天哪！這三張照片組成的專題跨頁簡直是藝術品！讀者們都為之瘋狂了！」","「雜誌社已經將豐厚稿費匯入你的帳戶，下一期封面故事的主角就是你！」"],storySummary:"為國際頂尖天文雜誌拍攝星雲生死輪迴三部曲，作品登上國際特刊封面。",starHoppingTip:"【蘇菲主編傳授】：M1（金牛座角尖，秋冬季）、M57（天琴座織女星旁，夏季）、M27（狐狸座天鵝座間，夏秋季），按 R/T 調整至對應季節深夜。",objectives:[{type:"capture_target",targetId:"M1",description:"拍攝 M1 蟹狀星雲 (超新星殘骸)"},{type:"capture_target",targetId:"M57",description:"拍攝 M57 環狀星雲 (垂死恆星)"},{type:"capture_target",targetId:"M27",description:"拍攝 M27 啞鈴星雲 (雙極星雲)"}],rewards:{money:3500},prerequisiteQuestId:"ch2_masterpiece"},{id:"ch3_galaxy_cluster",chapter:3,title:"星系探索者：跨越億萬光年的凝視",character:Hn.alan,introDialogue:["【加密通訊】艾倫研究員：「暗號確認。我是『深空巡天計畫』的艾倫。」","「我們在追蹤數千萬光年外星系演化的微弱光譜信號，急需民間高階天文台協助觀測三座指標星系：」","「【認星與時段】：1. M51 渦狀星系位於北斗七星勺柄（搖光星）往西南延伸處（春夏季 21:00~03:00）；2. M81 波德星系位於大熊座頭頂（幾乎全年北天可見）；3. M104 草帽星系位於室女座南端（春季 22:00~04:00）。」"],completeDialogue:["【加密通訊】艾倫研究員：「所有星系數據完整校準完畢！這組數據填補了跨星系演化模型的重要空白！」","「你的名字已經被永久記錄在國際深空巡天數據庫的貢獻者名冊中。星空浩瀚，探索永無止境！」"],storySummary:"為國際深空巡天計畫提供三座百萬光年外指標星系的高解析照片，名字被載入國際天文史冊。",starHoppingTip:"【艾倫傳授】：M51（北斗勺柄，春夏季）、M81（大熊座，整年）、M104（室女座南端，春季）。",objectives:[{type:"capture_target",targetId:"M51",description:"拍攝 M51 渦狀星系"},{type:"capture_target",targetId:"M81",description:"拍攝 M81 波德星系"},{type:"capture_target",targetId:"M104",description:"拍攝 M104 草帽星系"}],rewards:{money:5e3},prerequisiteQuestId:"ch2_nebula_expert"}];class O0{constructor(){document.addEventListener("photo-captured",e=>{this.onPhotoCaptured(e.detail)})}onPhotoCaptured(e){const n=oe.getState().completedQuestIds||[];for(const i of ts)n.includes(i.id)||i.prerequisiteQuestId&&!n.includes(i.prerequisiteQuestId)||this.checkQuestCompletion(i,e)&&this.completeQuest(i)}checkQuestCompletion(e,t){const i=oe.getState().photos||[];return e.objectives.every(a=>this.isObjectiveMet(a,i,t))}isObjectiveMet(e,t,n){const i=n.photo,a=n.targetInfo;switch(e.type){case"capture_any":return!0;case"capture_target":{const r=a?.name||a?.commonName||i?.targetName||"";if(!((a?.id||"")===e.targetId||r.includes(e.targetId||"___")))return!1;if(e.minQuality){const c=["D","C","B","A","S"];return c.indexOf(i.quality)>=c.indexOf(e.minQuality)}return!0}case"capture_count":{const r=n.photo?[...t,n.photo]:t,o=new Set;for(const l of r)(!e.targetType||l.targetType===e.targetType)&&o.add(l.targetName);return o.size>=(e.count||1)}case"quality_min":{const r=["D","C","B","A","S"];return r.indexOf(i.quality)>=r.indexOf(e.minQuality||"A")}}return!1}completeQuest(e){const t=oe.getState(),n=[...t.completedQuestIds||[],e.id];e.rewards.money&&t.addMoney(e.rewards.money),oe.setState({completedQuestIds:n}),document.dispatchEvent(new CustomEvent("quest-completed",{detail:{quest:e}}))}getActiveQuests(){const t=oe.getState().completedQuestIds||[];return ts.filter(n=>!(t.includes(n.id)||n.prerequisiteQuestId&&!t.includes(n.prerequisiteQuestId))).slice(0,3)}getNextQuest(){return this.getActiveQuests()[0]||null}isCompleted(e){return(oe.getState().completedQuestIds||[]).includes(e)}}class B0{constructor(){}getLocationUnlockCost(e){return 500+((oe.getState().unlockedLocations?.length||1)-1)*200}unlockLocation(e){const t=oe.getState(),n=this.getLocationUnlockCost(e);return this.canAfford(n)&&t.spendMoney&&t.unlockLocationId?(t.spendMoney(n),t.unlockLocationId(e),!0):!1}canAfford(e){return(oe.getState().money||0)>=e}getStats(){const e=oe.getState();return{totalEarned:e.totalMoneyEarned||0,totalSpent:e.totalMoneySpent||0,currentBalance:e.money||0}}}function ec(s,e,t,n){const i=e*Math.PI/180,a=s.dec*Math.PI/180;function r(A){const S=(18.697374558+24.06570982441908*(A.getTime()/864e5+24405875e-1-2451545))%24,C=((S<0?S+24:S)+t/15)%24;let F=((C<0?C+24:C)-s.ra)%24;F<0&&(F+=24);const W=F*15*Math.PI/180,$=Math.sin(i)*Math.sin(a)+Math.cos(i)*Math.cos(a)*Math.cos(W);return Math.asin(Math.max(-1,Math.min(1,$)))*180/Math.PI}function o(A){return Ei.getPosition(A,e,t).altitude*(180/Math.PI)<=-10}const l=r(n),c=o(n),h=l>=12&&c,d=new Date(n);d.setHours(12,0,0,0);let u=null,p=null,g=-999,v=null,m=[];for(let A=0;A<=1440;A+=15){const w=new Date(d.getTime()+A*60*1e3),P=r(w),S=o(w);P>=10&&!u&&(u=w),P<10&&u&&!p&&(p=w),S&&P>=12&&(m.push(w.getHours()),P>g&&(g=P,v=w))}const f=A=>A.toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit",hour12:!1}),T=u?f(u):null,E=p?f(p):null;let y="深夜時段";if(m.length>0){const A=Math.min(...m),w=Math.max(...m),P=S=>S.toString().padStart(2,"0");y=`${P(A)}:00 ~ ${P((w+1)%24)}:00`}else T&&(y=`升起後 (${T})`);let N="";return h?N=`目前空中可見（仰角 ${Math.round(l)}° · 正值最佳觀測時段）`:c?l<10?N=T?`目前在地平線下（預計 ${T} 升起 · 最佳觀測：${y}）`:`最佳觀測時段為 ${y}`:N=`最佳觀測時段為 ${y}`:N=`目前為白天，夜間最佳觀測時段為 ${y}`,{isCurrentlyVisible:h,currentAltitude:l,riseTimeStr:T,setTimeStr:E,bestTimeStr:y,bestDate:v,summary:N}}class k0{constructor(){this.timeButtons=[],this.lastQuestTrackerKey="";const e=document.getElementById("ui-overlay");if(!e)throw new Error("ui-overlay element not found in document");this.container=document.createElement("div"),this.container.className="hud";const t=document.createElement("div");t.className="hud-panel top-left";const n=document.createElement("div");n.className="time-row",this.timeDisplay=document.createElement("div"),this.timeDisplay.className="time-display",this.timeDisplay.textContent="--:--:--",this.timeDisplay.style.cursor="pointer",this.timeDisplay.title="點擊開啟時間與倒流控制中心 [R]",this.timeDisplay.onclick=()=>{window.dispatchEvent(new KeyboardEvent("keydown",{key:"r"}))},this.sunPhaseDisplay=document.createElement("div"),this.sunPhaseDisplay.className="sun-phase",this.sunPhaseDisplay.textContent="觀星夜",this.sunPhaseDisplay.style.cursor="pointer",this.sunPhaseDisplay.onclick=()=>{window.dispatchEvent(new KeyboardEvent("keydown",{key:"r"}))};const i=document.createElement("button");i.className="time-btn",i.textContent="現在",i.title="一鍵重置至目前現實時間",i.style.flex="none",i.style.padding="2px 8px",i.onclick=()=>{oe.getState().resetToRealTime()},n.appendChild(this.timeDisplay),n.appendChild(this.sunPhaseDisplay),n.appendChild(i),t.appendChild(n);const a=document.createElement("div");a.className="time-controls",[{label:"暫停",value:0},{label:"1x",value:1},{label:"10x",value:10},{label:"60x",value:60},{label:"5m",value:300},{label:"16m",value:1e3}].forEach(g=>{const v=document.createElement("button");v.className=`time-btn ${g.value===1?"active":""}`,v.textContent=g.label,v.onclick=()=>{g.value===0?oe.getState().toggleTimePause():(oe.getState().isTimePaused&&oe.getState().toggleTimePause(),oe.getState().setTimeScale(g.value))},this.timeButtons.push(v),a.appendChild(v)}),t.appendChild(a);const o=document.createElement("div");o.className="hud-panel top-right",this.moneyDisplay=document.createElement("div"),this.moneyDisplay.className="money-badge",this.moneyDisplay.innerHTML="$0",this.weatherDisplay=document.createElement("div"),this.weatherDisplay.className="weather-badge",this.weatherDisplay.textContent="晴朗",this.weatherDisplay.className="weather-badge",this.weatherDisplay.textContent="晴朗";const l=document.createElement("div");l.className="hud-volume-bar",this.quickMuteBtn=document.createElement("button"),this.quickMuteBtn.className="hud-vol-icon-btn",this.quickMuteBtn.textContent="音量",this.quickMuteBtn.title="點擊靜音 / 解除靜音 [M]",this.quickMuteBtn.onclick=()=>oe.getState().toggleMute(),this.quickVolSlider=document.createElement("input"),this.quickVolSlider.type="range",this.quickVolSlider.className="hud-quick-vol-slider",this.quickVolSlider.min="0",this.quickVolSlider.max="100",this.quickVolSlider.value="70",this.quickVolSlider.title="拖曳直接調整音量大小",this.quickVolSlider.oninput=()=>{const g=parseInt(this.quickVolSlider.value)/100;oe.getState().isMuted&&oe.getState().toggleMute(),oe.getState().setMasterVolume(g)},this.quickVolVal=document.createElement("span"),this.quickVolVal.className="hud-vol-percent",this.quickVolVal.textContent="70%";const c=document.createElement("button");c.className="hud-vol-mixer-btn",c.textContent="設定",c.title="開啟四聲道混音設定 (蟲鳴/鳥叫/微風/馬達/雨聲)",c.onclick=()=>this.toggleAudioModal(),l.appendChild(this.quickMuteBtn),l.appendChild(this.quickVolSlider),l.appendChild(this.quickVolVal),l.appendChild(c);const h=document.createElement("div");h.className="guide-badge",h.innerHTML="<span>圖鑑</span>",h.title="開啟觀測圖鑑與任務日誌 [G]",h.onclick=()=>{window.dispatchEvent(new KeyboardEvent("keydown",{key:"g",code:"KeyG"}))};const d=document.createElement("div");d.className="guide-badge",d.innerHTML="<span>說明</span>",d.title="開啟操作說明書與觀星指南 [H]",d.onclick=()=>{window.dispatchEvent(new KeyboardEvent("keydown",{key:"h"}))},o.appendChild(this.moneyDisplay),o.appendChild(this.weatherDisplay),o.appendChild(l),o.appendChild(h),o.appendChild(d),this.audioModal=this.createAudioModal();const u=document.createElement("div");u.className="hud-panel bottom-left",this.locationDisplay=document.createElement("div"),u.appendChild(this.locationDisplay);const p=document.createElement("div");p.className="hud-panel bottom-right",p.innerHTML=`
            <span><span class="key-tag">Alt</span>游標</span>
            <span><span class="key-tag">C</span>星座</span>
            <span><span class="key-tag">L</span>地點</span>
            <span><span class="key-tag">R</span>倒流</span>
            <span><span class="key-tag">M</span>音量</span>
            <span><span class="key-tag">H</span>說明</span>
            <span><span class="key-tag">U</span>無UI</span>
        `,this.promptDisplay=document.createElement("div"),this.promptDisplay.className="interact-prompt",this.promptDisplay.innerHTML="<span>按 [E] 使用望遠鏡</span>",this.crosshair=document.createElement("div"),this.crosshair.className="crosshair",this.telescopeMarker=document.createElement("div"),this.telescopeMarker.className="waypoint-marker telescope",this.telescopeMarker.innerHTML='<span>望遠鏡</span><span class="key-hint">E</span><span class="dist" style="opacity:0.6"></span>',this.studioMarker=document.createElement("div"),this.studioMarker.className="waypoint-marker studio",this.studioMarker.innerHTML='<span>工作室</span><span class="key-hint">F</span><span class="dist" style="opacity:0.6"></span>',this.starTargetBadge=document.createElement("div"),this.starTargetBadge.className="hud-star-target-badge",this.starTargetBadge.style.display="none",this.container.appendChild(t),this.container.appendChild(o),this.container.appendChild(this.audioModal),this.container.appendChild(u),this.container.appendChild(p),this.container.appendChild(this.promptDisplay),this.container.appendChild(this.crosshair),this.container.appendChild(this.telescopeMarker),this.container.appendChild(this.studioMarker),this.container.appendChild(this.starTargetBadge),e.appendChild(this.container),this.unsubscribe=oe.subscribe(g=>this.update(g)),this.update(oe.getState())}createAudioModal(){const e=document.createElement("div");e.className="audio-modal",e.style.display="none";const t=document.createElement("div");t.className="audio-modal-header",t.innerHTML="<h3>音效與音量設定</h3>";const n=document.createElement("button");return n.className="close-btn",n.style.width="26px",n.style.height="26px",n.style.fontSize="14px",n.innerHTML="&times;",n.onclick=()=>this.toggleAudioModal(!1),t.appendChild(n),e.appendChild(t),[{id:"master",label:"全局音量 (Master)",val:70,prop:"masterVolume",setter:"setMasterVolume"},{id:"machine",label:"機器音量 (馬達/齒輪/快門)",val:70,prop:"machineVolume",setter:"setMachineVolume"},{id:"ambient",label:"環境音量 (自然夜風氛圍)",val:80,prop:"ambientVolume",setter:"setAmbientVolume"},{id:"weather",label:"天氣音量 (雨聲)",val:80,prop:"weatherVolume",setter:"setWeatherVolume"}].forEach(a=>{const r=document.createElement("div");r.className="audio-row";const o=document.createElement("div");o.className="audio-label-row",o.innerHTML=`<span>${a.label}</span><span class="val" id="val-${a.id}">${a.val}%</span>`;const l=document.createElement("input");l.type="range",l.min="0",l.max="100",l.value=a.val.toString(),l.oninput=()=>{const h=parseInt(l.value)/100;oe.getState()[a.setter](h)},a.id==="master"?(this.masterSlider=l,this.masterValSpan=o.querySelector(".val")):a.id==="machine"?(this.machineSlider=l,this.machineValSpan=o.querySelector(".val")):a.id==="ambient"?(this.ambientSlider=l,this.ambientValSpan=o.querySelector(".val")):a.id==="weather"&&(this.weatherSlider=l,this.weatherValSpan=o.querySelector(".val")),r.appendChild(o),r.appendChild(l),e.appendChild(r)}),this.muteBtn=document.createElement("button"),this.muteBtn.className="audio-mute-btn",this.muteBtn.textContent="一鍵靜音 (Mute)",this.muteBtn.onclick=()=>{oe.getState().toggleMute()},document.addEventListener("keydown",a=>{a.code==="Escape"&&this.audioModal.classList.contains("visible")&&this.toggleAudioModal(!1)}),e}toggleAudioModal(e){e!==void 0?this.audioModal.classList.toggle("visible",e):this.audioModal.classList.toggle("visible")}formatTime(e){return e.toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}formatDate(e){return e.toLocaleDateString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit"})}getSunPhaseText(e){const t=e.getHours();return t>=6&&t<17?"白晝":t>=17&&t<19?"黃昏":t>=19||t<5?"觀星夜":"黎明"}getWeatherBadge(e){switch(e){case Ge.Clear:return"萬里無雲";case Ge.PartlyCloudy:return"局部多雲";case Ge.Cloudy:return"密雲";case Ge.Rainy:return"降雨中";default:return"晴朗"}}update(e){const t=document.getElementById("ui-overlay");if(t&&t.classList.toggle("ui-hidden",!e.isUIVisible),e.gameMode===Pe.Studio||e.gameMode===Pe.Telescope){this.container.style.display="none",this.toggleAudioModal(!1);return}else this.container.style.display="block";this.crosshair.style.display=e.gameMode===Pe.Walk?"block":"none",e.currentTime&&(this.timeDisplay.innerHTML=`<span style="font-size:11px;color:#94a3b8;margin-right:6px">${this.formatDate(e.currentTime)}</span>${this.formatTime(e.currentTime)}`,this.sunPhaseDisplay.textContent=this.getSunPhaseText(e.currentTime)),this.moneyDisplay.innerHTML=`$${e.money}`,this.weatherDisplay.textContent=this.getWeatherBadge(e.weather);const n=Math.round(e.masterVolume*100),i=Math.round(e.machineVolume*100),a=Math.round(e.ambientVolume*100),r=Math.round(e.weatherVolume*100);if(this.quickVolSlider&&(this.quickVolSlider.value=(e.isMuted?0:n).toString(),this.quickVolVal.textContent=e.isMuted?"靜音":`${n}%`,this.quickMuteBtn.textContent=e.isMuted?"靜音":"音量",this.quickMuteBtn.classList.toggle("muted",e.isMuted)),this.muteBtn&&(e.isMuted?(this.muteBtn.textContent="解除靜音 (Unmute)",this.muteBtn.classList.add("active")):(this.muteBtn.textContent="一鍵靜音 (Mute)",this.muteBtn.classList.remove("active"))),this.masterSlider&&(this.masterSlider.value=n.toString(),this.masterValSpan.textContent=`${n}%`,this.machineSlider.value=i.toString(),this.machineValSpan.textContent=`${i}%`,this.ambientSlider.value=a.toString(),this.ambientValSpan.textContent=`${a}%`,this.weatherSlider.value=r.toString(),this.weatherValSpan.textContent=`${r}%`),e.currentLocation){const c=e.currentLocation;this.locationDisplay.innerHTML=`
                <div class="location-title">${c.name}</div>
                <div class="location-coords">
                    緯度 ${c.latitude>0?`${c.latitude.toFixed(2)}°N`:`${(-c.latitude).toFixed(2)}°S`} · 
                    經度 ${c.longitude>0?`${c.longitude.toFixed(2)}°E`:`${(-c.longitude).toFixed(2)}°W`} · 
                    ${c.altitude}m
                </div>
            `}const o=e.isTimePaused?0:e.timeScale,l=[0,1,10,60,300,1e3];this.timeButtons.forEach((c,h)=>{c.classList.toggle("active",l[h]===o)})}showInteractPrompt(e){this.promptDisplay.innerHTML=`<span>${e}</span>`,this.promptDisplay.classList.add("visible")}hideInteractPrompt(){this.promptDisplay.classList.remove("visible")}showNotification(e,t="info"){const n=document.createElement("div");n.className=`notification notification-${t}`,n.textContent=e,document.getElementById("ui-overlay")?.appendChild(n),requestAnimationFrame(()=>n.classList.add("visible")),setTimeout(()=>{n.classList.remove("visible"),setTimeout(()=>n.remove(),400)},t==="warning"?4500:t==="success"?3500:3e3)}updateQuestTracker(e){let t=document.getElementById("quest-tracker-hud");if(!e){t&&(t.style.display="none"),this.lastQuestTrackerKey="";return}t||(t=document.createElement("div"),t.id="quest-tracker-hud",t.className="quest-tracker-hud",t.style.cursor="pointer",t.title="點擊聆聽角色教學對話 · 按 G 開啟圖鑑",document.getElementById("ui-overlay")?.appendChild(t));let n="";const i=e.objectives?.find(r=>r.targetId);if(i?.targetId){const r=In.find(o=>o.id===i.targetId||o.name===i.targetId);if(r){const o=oe.getState(),l=ec(r,o.currentLocation.latitude,o.currentLocation.longitude,o.currentTime);l.isCurrentlyVisible?n=`<div class="qt-time-badge visible">目前空中可見 (仰角 ${Math.round(l.currentAltitude)}°) · 最佳觀測中</div>`:l.riseTimeStr?n=`<div class="qt-time-badge waiting">預計 ${l.riseTimeStr} 升起 · 最佳時段 ${l.bestTimeStr}（按 R/T 快轉）</div>`:n=`<div class="qt-time-badge waiting">最佳觀測時段：${l.bestTimeStr}（按 R/T 調整時間）</div>`}}const a=`${e.id}_${e.title}_${n}_${(e.objectives||[]).map(r=>r.description).join("")}`;this.lastQuestTrackerKey!==a&&(this.lastQuestTrackerKey=a,t.onclick=r=>{r.stopPropagation(),document.dispatchEvent(new CustomEvent("play-story-dialogue",{detail:{quest:e,mode:"intro"}}))},t.style.display="block",t.innerHTML=`
            <div class="qt-header">
                <span class="qt-avatar">${e.character?.avatarIcon||""}</span>
                <div>
                    <div class="qt-title">${e.character?.name||"任務導師"} · 主線任務</div>
                    <div class="qt-quest">${e.title}</div>
                </div>
            </div>
            <div class="qt-objectives">
                ${(e.objectives||[]).slice(0,2).map(r=>`<div class="qt-obj">○ ${r.description}</div>`).join("")}
            </div>
            ${n}
            <div class="qt-hint">點擊聆聽角色尋星對話 [G]</div>
        `)}updateWaypoints(e,t,n){if(oe.getState().gameMode!==Pe.Walk){this.telescopeMarker.style.display="none",this.studioMarker.style.display="none";return}const a=t.clone().add(new R(0,1.8,0)),r=e.position.distanceTo(t);if(a.project(e),a.z<1){const c=(a.x*.5+.5)*window.innerWidth,h=(-a.y*.5+.5)*window.innerHeight;this.telescopeMarker.style.left=`${c}px`,this.telescopeMarker.style.top=`${h}px`,this.telescopeMarker.style.display="flex";const d=this.telescopeMarker.querySelector(".dist");d&&(d.textContent=`(${r.toFixed(1)}m)`)}else this.telescopeMarker.style.display="none";const o=n.clone().add(new R(0,2.5,0)),l=e.position.distanceTo(n);if(o.project(e),o.z<1){const c=(o.x*.5+.5)*window.innerWidth,h=(-o.y*.5+.5)*window.innerHeight;this.studioMarker.style.left=`${c}px`,this.studioMarker.style.top=`${h}px`,this.studioMarker.style.display="flex";const d=this.studioMarker.querySelector(".dist");d&&(d.textContent=`(${l.toFixed(1)}m)`)}else this.studioMarker.style.display="none"}updateStarLookTarget(e){this.starTargetBadge.style.display="none"}dispose(){this.unsubscribe(),this.container.remove()}}class z0{constructor(){this.idleTimer=null;const e=document.getElementById("ui-overlay");if(!e)throw new Error("ui-overlay not found");this.container=document.createElement("div"),this.container.className="telescope-overlay",this.container.style.display="none",this.vignette=document.createElement("div"),this.vignette.className="telescope-vignette",this.reticle=document.createElement("div"),this.reticle.className="telescope-reticle",this.starIdentifier=document.createElement("div"),this.starIdentifier.className="star-identifier",this.starIdentifier.style.display="none",this.finderGuidance=document.createElement("div"),this.finderGuidance.className="finder-guidance",this.finderGuidance.style.display="none",this.infoPanel=document.createElement("div"),this.infoPanel.className="telescope-info";const t=document.createElement("div");t.className="telescope-readouts",this.fovZoomDisplay=document.createElement("div"),this.raDecDisplay=document.createElement("div"),t.appendChild(this.fovZoomDisplay),t.appendChild(this.raDecDisplay);const n=document.createElement("div");n.className="telescope-controls-row",this.toggleExposureBtn=document.createElement("button"),this.toggleExposureBtn.className="shutter-btn",this.toggleExposureBtn.innerHTML="<span>開始曝光 [空白鍵]</span>",this.toggleExposureBtn.onclick=a=>{a.stopPropagation(),document.dispatchEvent(new CustomEvent("capture-photo")),this.showControls()},n.appendChild(this.toggleExposureBtn),this.exposureBar=document.createElement("div"),this.exposureBar.className="exposure-bar",this.exposureBar.style.display="none",this.exposureProgress=document.createElement("div"),this.exposureProgress.className="exposure-progress",this.exposureBar.appendChild(this.exposureProgress);const i=document.createElement("div");i.className="keyboard-hints",i.textContent="滑鼠移動: 轉向視角 · 右鍵: 微調 · 滾輪: 變焦 · 空白鍵: 手動開始/結束曝光 · ESC: 退出",this.infoPanel.appendChild(t),this.infoPanel.appendChild(n),this.infoPanel.appendChild(this.exposureBar),this.infoPanel.appendChild(i),this.container.appendChild(this.vignette),this.container.appendChild(this.reticle),this.container.appendChild(this.finderGuidance),this.container.appendChild(this.starIdentifier),this.container.appendChild(this.infoPanel),e.appendChild(this.container),this.setupActivityListeners(),this.unsubscribe=oe.subscribe(a=>this.handleStateChange(a))}setupActivityListeners(){const e=()=>{oe.getState().gameMode===Pe.Telescope&&this.showControls()};window.addEventListener("mousemove",e),window.addEventListener("wheel",e,{passive:!0}),window.addEventListener("keydown",e),window.addEventListener("mousedown",e)}showControls(){this.infoPanel.classList.remove("idle-hidden"),this.idleTimer&&clearTimeout(this.idleTimer),!oe.getState().isExposing&&(this.idleTimer=window.setTimeout(()=>{oe.getState().gameMode===Pe.Telescope&&!oe.getState().isExposing&&this.infoPanel.classList.add("idle-hidden")},2800))}handleStateChange(e){e.gameMode===Pe.Telescope?this.show():this.hide()}update(e,t,n,i,a,r,o,l){e?(this.starIdentifier.innerHTML=`
                <strong>${e.name}</strong><br/>
                <span style="font-size:12px;color:#94a3b8">星等: ${e.magnitude.toFixed(1)} · 赤經: ${e.ra.toFixed(2)}h · 赤緯: ${e.dec.toFixed(2)}°</span>
            `,this.starIdentifier.style.display="block"):this.starIdentifier.style.display="none",this.fovZoomDisplay.textContent=`視場: ${a.toFixed(1)}° (${r.toFixed(1)}x)`,this.raDecDisplay.textContent=`RA: ${o.toFixed(2)}h | Dec: ${l.toFixed(2)}°`;const c=oe.getState(),h=c.completedQuestIds||[],d=ts.find(p=>!(h.includes(p.id)||p.prerequisiteQuestId&&!h.includes(p.prerequisiteQuestId)));let u=null;if(c.customTrackedDsoId)u=In.find(p=>p.id===c.customTrackedDsoId||p.name===c.customTrackedDsoId);else if(d){const p=d.objectives.find(g=>g.targetId);p?.targetId&&(u=In.find(g=>g.id===p.targetId||g.name===p.targetId))}if(u){const p=c.accessories||[],g=p.includes("finder_red_dot")||p.includes("mount_goto");if(!!(e&&(e.name.includes(u.name)||e.name.includes(u.commonName))))this.finderGuidance.className="finder-guidance locked",this.finderGuidance.innerHTML=`
                    <div class="fg-badge">目標已精確入鏡</div>
                    <div class="fg-title">${u.commonName||u.name}</div>
                    <div class="fg-sub">已成功定位天體！按空白鍵開始長曝光攝影</div>
                `,this.finderGuidance.style.display="flex";else if(g){let m=(u.ra-o)*15;for(;m>180;)m-=360;for(;m<-180;)m+=360;const f=u.dec-l,T=Math.sqrt(Math.pow(m*Math.cos(l*Math.PI/180),2)+Math.pow(f,2)),y=(Math.atan2(f,-m)*180/Math.PI+360)%360,N=["→","↗","↑","↖","←","↙","↓","↘"],A=Math.round(y/45)%8,w=N[A];this.finderGuidance.className="finder-guidance seeking pointer",this.finderGuidance.innerHTML=`
                    <div class="fg-badge">電子尋星系統已啟用</div>
                    <div class="fg-title">${w} ${u.commonName||u.name}</div>
                    <div class="fg-dist">距離視野: ${T.toFixed(1)}° · 請順指針轉動鏡筒</div>
                `,this.finderGuidance.style.display="flex"}else this.finderGuidance.style.display="none"}else this.finderGuidance.style.display="none";t?(this.infoPanel.classList.remove("idle-hidden"),this.exposureBar.style.display="block",this.exposureProgress.style.width="100%",this.toggleExposureBtn.className="shutter-btn exposing",this.toggleExposureBtn.innerHTML=`<span>結束曝光並存檔 [${n.toFixed(1)}s]</span>`):(this.exposureBar.style.display="none",this.exposureProgress.style.width="0%",this.toggleExposureBtn.className="shutter-btn",this.toggleExposureBtn.innerHTML="<span>開始曝光 [空白鍵]</span>")}show(){this.container.style.display="block",this.showControls()}hide(){this.container.style.display="none",this.idleTimer&&clearTimeout(this.idleTimer)}dispose(){this.unsubscribe(),this.idleTimer&&clearTimeout(this.idleTimer),this.container.remove()}}class V0{constructor(){this.currentTabIndex=0;const e=document.getElementById("ui-overlay");if(!e)throw new Error("ui-overlay not found");this.container=document.createElement("div"),this.container.className="studio-panel",this.container.style.display="none";const t=document.createElement("div");t.className="studio-header";const n=document.createElement("h2");n.textContent="觀星工作室 & 裝備商店",this.headerMoney=document.createElement("div"),this.headerMoney.className="studio-money";const i=document.createElement("button");i.className="close-btn",i.innerHTML="&times;",i.onclick=()=>{oe.getState().setGameMode(Pe.Walk)},t.appendChild(n),t.appendChild(this.headerMoney),t.appendChild(i);const a=document.createElement("div");a.className="studio-tabs",this.tabs=[],["照片庫","望遠鏡升級","配件商店"].forEach((r,o)=>{const l=document.createElement("button");l.className=`studio-tab ${o===0?"active":""}`,l.textContent=r,l.onclick=()=>this.switchTab(o),this.tabs.push(l),a.appendChild(l)}),this.contentArea=document.createElement("div"),this.contentArea.className="studio-body",this.container.appendChild(t),this.container.appendChild(a),this.container.appendChild(this.contentArea),e.appendChild(this.container),this.unsubscribe=oe.subscribe(r=>this.update(r))}switchTab(e){this.currentTabIndex=e,this.tabs.forEach((n,i)=>n.classList.toggle("active",i===e));const t=oe.getState();this.contentArea.innerHTML="",e===0?this.renderGallery(t):e===1?this.renderTelescopes(t):e===2&&this.renderAccessories(t)}renderGallery(e){const t=[...e.photos||[]].sort((c,h)=>{const d=c.timestamp instanceof Date?c.timestamp.getTime():new Date(c.timestamp).getTime();return(h.timestamp instanceof Date?h.timestamp.getTime():new Date(h.timestamp).getTime())-d}),n=t.filter(c=>!c.sold),i=n.reduce((c,h)=>c+(h.sellPrice||h.price||0),0),a=document.createElement("div");a.style.display="flex",a.style.justifyContent="space-between",a.style.alignItems="center",a.style.marginBottom="16px";const r=document.createElement("div");r.textContent=`未出售照片: ${n.length} 張 (總價值: $${i})`;const o=document.createElement("button");o.className="buy-btn",o.textContent=`全部出售 ($${i})`,o.disabled=n.length===0,o.onclick=()=>{e.sellAllPhotos()>0&&this.switchTab(0)},a.appendChild(r),a.appendChild(o),this.contentArea.appendChild(a);const l=document.createElement("div");if(l.className="photo-grid",t.forEach((c,h)=>{const d=document.createElement("div");d.className=`photo-card ${c.sold?"sold":""}`,d.style.cursor="pointer";const u=c.sellPrice||c.price||0,p=c.quality||"C",g=c.repeatPenaltyFactor!==void 0&&c.repeatPenaltyFactor<1?'<span class="repeat-badge" title="重複拍攝，市場價值降低">重複</span>':"";d.innerHTML=`
                <img src="${c.imageDataUrl}" alt="${c.targetName}" />
                <div class="photo-meta">
                    <span class="quality ${p}">${p}級</span>
                    ${g}
                    <div class="target">${c.targetName}</div>
                    <div class="price">${c.sold?"已售出":u===0?"市場飽和 $0":`$${u}`}</div>
                    ${c.sold?"":`<button class="photo-sell-btn" data-id="${c.id}">出售</button>`}
                </div>
            `,d.onclick=m=>{m.target.classList.contains("photo-sell-btn")||document.dispatchEvent(new CustomEvent("open-lightbox",{detail:{photoId:c.id}}))};const v=d.querySelector(".photo-sell-btn");v&&v.addEventListener("click",m=>{m.stopPropagation(),e.sellPhoto(c.id),this.switchTab(0)}),l.appendChild(d)}),t.length===0){const c=document.createElement("p");c.style.textAlign="center",c.style.opacity="0.5",c.style.marginTop="40px",c.textContent="目前沒有照片。按 E 使用望遠鏡並按空白鍵拍照！",this.contentArea.appendChild(c)}else this.contentArea.appendChild(l)}renderTelescopes(e){const t=document.createElement("div");t.className="shop-list",js.forEach(n=>{const i=document.createElement("div"),a=e.telescopeLevel===n.level,r=e.telescopeLevel>=n.level;if(i.className="shop-item",i.innerHTML=`
                <div class="item-info">
                    <div class="item-name">${n.name} ${a?"（當前使用中）":""}</div>
                    <div class="item-desc">口徑: ${n.apertureMm}mm | 極限星等: ${n.limitingMagnitude} | 最小視場: ${n.minFov}°</div>
                </div>
                <div class="item-price">$${n.price}</div>
            `,a){const o=document.createElement("button");o.className="buy-btn owned",o.textContent="使用中",i.appendChild(o)}else if(r){const o=document.createElement("button");o.className="buy-btn owned",o.textContent="已擁有",i.appendChild(o)}else{const o=document.createElement("button");o.className="buy-btn",o.textContent="升級",o.disabled=e.money<n.price,o.onclick=()=>{e.upgradeTelescope(n.level)&&this.switchTab(1)},i.appendChild(o)}t.appendChild(i)}),this.contentArea.appendChild(t)}renderAccessories(e){const t=document.createElement("div");t.className="shop-list",(e.accessories||[]).forEach(n=>{const i=document.createElement("div");if(i.className="shop-item",i.innerHTML=`
                <div class="item-info">
                    <div class="item-name">${n.name}</div>
                    <div class="item-desc">${n.description}</div>
                </div>
                <div class="item-price">$${n.price}</div>
            `,n.owned){const a=document.createElement("button");a.className="buy-btn owned",a.textContent="已擁有",i.appendChild(a)}else{const a=document.createElement("button");a.className="buy-btn",a.textContent="購買",a.disabled=e.money<n.price,a.onclick=()=>{e.buyAccessory(n.id)&&this.switchTab(2)},i.appendChild(a)}t.appendChild(i)}),this.contentArea.appendChild(t)}update(e){this.headerMoney.textContent=`$${e.money}`,e.gameMode===Pe.Studio&&this.container.style.display==="none"?this.show():e.gameMode!==Pe.Studio&&this.container.style.display==="flex"&&this.hide()}show(){this.container.style.display="flex",this.switchTab(this.currentTabIndex)}hide(){this.container.style.display="none"}dispose(){this.unsubscribe(),this.container.remove()}}const ka=[{id:"moon",name:"Moon",commonName:"月球",type:"天然衛星",desc:"地球唯一的天然衛星，表面覆蓋大量環形山與月海暗斑。",magnitude:-12.5},{id:"saturn",name:"Saturn",commonName:"土星",type:"氣態巨行星",desc:"擁有太陽系中最壯觀耀眼的光環系統與卡西尼環縫。",magnitude:.5},{id:"jupiter",name:"Jupiter",commonName:"木星",type:"氣態巨行星",desc:"太陽系最大行星，表面有清晰的雲帶、大紅斑與四顆伽利略衛星。",magnitude:-2.6},{id:"mars",name:"Mars",commonName:"火星",type:"類地行星",desc:"紅色荒漠行星，兩極擁有由乾冰與水冰組成的白色極冠。",magnitude:-1.5},{id:"venus",name:"Venus",commonName:"金星",type:"類地行星",desc:"夜空中最明亮的行星（啟明星/長庚星），擁有顯著的相位盈虧。",magnitude:-4.3},{id:"mercury",name:"Mercury",commonName:"水星",type:"類地行星",desc:"最接近太陽的行星，運行速度極快，僅在清晨或黃昏短暫可見。",magnitude:-.4},{id:"uranus",name:"Uranus",commonName:"天王星",type:"冰巨行星",desc:"淡藍綠色的遙遠冰巨星，自轉軸極度傾斜。",magnitude:5.7},{id:"neptune",name:"Neptune",commonName:"海王星",type:"冰巨行星",desc:"深藍色的太陽系最外側大行星，擁有強烈的風暴系統。",magnitude:7.8}];function Fs(s,e){const t=(s.name||"").toLowerCase(),n=(s.commonName||"").toLowerCase(),i=(s.id||"").toLowerCase();return e.filter(a=>{const r=(a.targetName||"").toLowerCase();return r?!!(i&&r.includes(i)||n&&r.includes(n)||t&&r.includes(t)):!1}).sort((a,r)=>(r.score||0)-(a.score||0))}class G0{constructor(){this.isVisible=!1,this.currentTab=0,this.container=document.createElement("div"),this.container.className="codex-panel",this.container.style.display="none",document.body.appendChild(this.container),this.onPhotoCapturedHandler=()=>{this.isVisible&&this.render()},this.onQuestCompletedHandler=()=>{this.isVisible&&this.render()},document.addEventListener("photo-captured",this.onPhotoCapturedHandler),document.addEventListener("quest-completed",this.onQuestCompletedHandler),document.addEventListener("keydown",e=>{if(e.code==="KeyG"||e.key.toLowerCase()==="g"){const t=oe.getState().gameMode;(t===Pe.Walk||t===Pe.Studio||this.isVisible)&&this.toggle()}else e.code==="Escape"&&this.isVisible&&(this.hide(),e.stopPropagation())})}toggle(){this.isVisible?this.hide():this.show()}show(){this.isVisible=!0,this.container.style.display="flex",document.pointerLockElement&&document.exitPointerLock(),this.render()}hide(){this.isVisible=!1,this.container.style.display="none"}get visible(){return this.isVisible}render(){const e=oe.getState(),t=e.photos||[],n=e.completedQuestIds||[],i=In.filter(d=>Fs(d,t).length>0).length,a=ka.filter(d=>Fs(d,t).length>0).length;this.container.innerHTML=`
        <div class="codex-header">
            <h2>觀測圖鑑 & 任務日誌</h2>
            <button class="close-btn" id="codex-close-btn" title="關閉圖鑑 [ESC]">&times;</button>
        </div>
        <div class="codex-tabs">
            <button class="codex-tab ${this.currentTab===0?"active":""}" id="codex-tab-0">深空天體 (${i}/${In.length})</button>
            <button class="codex-tab ${this.currentTab===1?"active":""}" id="codex-tab-1">太陽系行星 (${a}/${ka.length})</button>
            <button class="codex-tab ${this.currentTab===2?"active":""}" id="codex-tab-2">主線任務 (${n.length}/${ts.length})</button>
        </div>
        <div class="codex-body ${this.currentTab===2?"quest-mode":""}" id="codex-body"></div>
        `;const r=this.container.querySelector("#codex-close-btn");r&&(r.onclick=d=>{d.stopPropagation(),this.hide()});const o=this.container.querySelector("#codex-tab-0");o&&(o.onclick=d=>{d.stopPropagation(),this.currentTab=0,this.render()});const l=this.container.querySelector("#codex-tab-1");l&&(l.onclick=d=>{d.stopPropagation(),this.currentTab=1,this.render()});const c=this.container.querySelector("#codex-tab-2");c&&(c.onclick=d=>{d.stopPropagation(),this.currentTab=2,this.render()});const h=this.container.querySelector("#codex-body");h&&(this.currentTab===0?this.renderDSOGrid(h,t,e):this.currentTab===1?this.renderPlanetsGrid(h,t):this.renderQuestLog(h,n))}renderDSOGrid(e,t,n){e.innerHTML="";const i={galaxy:"星系",nebula:"星雲",cluster:"星團",planetary_nebula:"行星狀星雲"};for(const a of In){const r=Fs(a,t),o=r.length>0,l=r[0],c=ec(a,n.currentLocation.latitude,n.currentLocation.longitude,n.currentTime),h=document.createElement("div");h.className=`codex-dso-card ${o?"captured":"locked"}`,h.innerHTML=`
                ${o&&l?`<img src="${l.imageDataUrl}" alt="${a.name}" class="codex-thumb"/>`:`<div class="codex-thumb-lock">${a.name}</div>`}
                <div class="codex-dso-info">
                    <div class="codex-dso-name">${o?a.commonName:a.name}</div>
                    <div class="codex-dso-meta">${i[a.type]||a.type} &bull; 視星等 ${a.magnitude}</div>
                    <div style="font-size:11px; color:#94a3b8; margin: 2px 0;">最佳時段: ${c.bestTimeStr}</div>
                    ${o?`<div class="codex-dso-grade quality ${l?.quality}">最高評級: ${l?.quality}級 (${l?.score}分)</div>`:'<div class="codex-dso-lock-icon">未觀測解鎖</div>'}
                </div>
            `,o&&l&&(h.style.cursor="pointer",h.title="點擊查看高解析照片",h.onclick=d=>{d.stopPropagation(),document.dispatchEvent(new CustomEvent("open-lightbox",{detail:{photoId:l.id}}))}),e.appendChild(h)}}renderPlanetsGrid(e,t){e.innerHTML="";for(const n of ka){const i=Fs(n,t),a=i.length>0,r=i[0],o=document.createElement("div");o.className=`codex-dso-card ${a?"captured":"locked"}`,o.innerHTML=`
                ${a&&r?`<img src="${r.imageDataUrl}" alt="${n.commonName}" class="codex-thumb"/>`:`<div class="codex-thumb-lock">${n.commonName}</div>`}
                <div class="codex-dso-info">
                    <div class="codex-dso-name">${n.commonName} (${n.name})</div>
                    <div class="codex-dso-meta">${n.type} &bull; 視星等 ${n.magnitude}</div>
                    <div style="font-size:11px; color:#94a3b8; margin: 2px 0;">${n.desc}</div>
                    ${a?`<div class="codex-dso-grade quality ${r?.quality}">最高評級: ${r?.quality}級 (${r?.score}分)</div>`:'<div class="codex-dso-lock-icon">未拍攝收錄</div>'}
                </div>
            `,a&&r&&(o.style.cursor="pointer",o.title="點擊查看高解析照片",o.onclick=l=>{l.stopPropagation(),document.dispatchEvent(new CustomEvent("open-lightbox",{detail:{photoId:r.id}}))}),e.appendChild(o)}}renderQuestLog(e,t){e.innerHTML="";for(const n of ts){const i=t.includes(n.id),r=(!n.prerequisiteQuestId||t.includes(n.prerequisiteQuestId))&&!i,o=document.createElement("div");o.className=`codex-quest-card ${i?"done":r?"available":"locked"}`;const l=n.character;o.innerHTML=`
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                    <div>
                        <div class="quest-status">${i?"[已完成]":r?"[進行中]":"[未解鎖]"}</div>
                        <div class="quest-chapter">第 ${n.chapter} 章 · ${n.title}</div>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px; background:rgba(255,255,255,0.06); padding:4px 10px; border-radius:16px;">
                        <span style="font-size:16px;">${l.avatarIcon}</span>
                        <span style="font-size:12px; color:${l.color}; font-weight:600;">${l.name}</span>
                    </div>
                </div>
                <div class="quest-story">${i||r?n.storySummary:"完成前置章節任務以解鎖劇情"}</div>
                ${i||r?`
                    <div class="quest-objectives">
                        <div style="font-size:11px; color:#64748b; margin-bottom:4px;">任務目標：</div>
                        ${n.objectives.map(h=>`<div class="quest-obj ${i?"done":""}">${i?"[完成]":"[進行]"} ${h.description}</div>`).join("")}
                    </div>
                `:""}
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; border-top:1px solid rgba(255,255,255,0.08); padding-top:8px;">
                    <div class="quest-reward">獎勵: ${n.rewards.money?`$${n.rewards.money}`:""}${n.rewards.unlockLocation?" · 解鎖新地點":""}</div>
                    ${i||r?'<button class="quest-replay-btn" style="background:rgba(56,189,248,0.15); border:1px solid rgba(56,189,248,0.3); color:#38bdf8; padding:4px 12px; border-radius:6px; font-size:12px; cursor:pointer; transition:all 0.2s;">聆聽劇情對話</button>':""}
                </div>
            `;const c=o.querySelector(".quest-replay-btn");c&&(c.onclick=h=>{h.stopPropagation(),this.hide(),document.dispatchEvent(new CustomEvent("play-story-dialogue",{detail:{quest:n,mode:i?"complete":"intro"}}))}),e.appendChild(o)}}dispose(){document.removeEventListener("photo-captured",this.onPhotoCapturedHandler),document.removeEventListener("quest-completed",this.onQuestCompletedHandler),this.container.remove()}}class H0{constructor(){this.currentPhotos=[],this.currentIndex=0,this.overlay=document.createElement("div"),this.overlay.className="lightbox-overlay",this.overlay.style.display="none",this.overlay.innerHTML=`
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
        `}dispose(){this.overlay.remove()}}class W0{constructor(){this.currentLines=[],this.lineIndex=0,this.onFinishCallback=null,this.isTyping=!1,this.typingTimer=null,this.currentLineText="",this.container=document.createElement("div"),this.container.className="story-modal",this.container.style.display="none",this.container.innerHTML=`
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
        `,document.body.appendChild(this.container),this.avatarEl=this.container.querySelector("#story-avatar"),this.nameEl=this.container.querySelector("#story-name"),this.roleEl=this.container.querySelector("#story-role"),this.textEl=this.container.querySelector("#story-text"),this.btnEl=this.container.querySelector("#story-next-btn"),this.titleEl=this.container.querySelector("#story-title"),this.btnEl.addEventListener("click",e=>{e.stopPropagation(),this.handleNext()}),this.container.querySelector(".story-box")?.addEventListener("click",e=>{e.stopPropagation(),this.handleNext()}),document.addEventListener("keydown",e=>{this.container.style.display!=="none"&&(e.code==="Space"||e.code==="Enter"||e.code==="KeyE"?(this.handleNext(),e.preventDefault()):e.code==="Escape"&&(this.hide(),this.onFinishCallback&&this.onFinishCallback(),e.preventDefault()))})}playIntroDialogue(e,t){this.currentLines=e.introDialogue,this.lineIndex=0,this.onFinishCallback=t||null,this.setCharacter(e.character,`【第 ${e.chapter} 章】${e.title}`),this.show(),this.showCurrentLine()}playCompleteDialogue(e,t){this.currentLines=e.completeDialogue,this.lineIndex=0,this.onFinishCallback=t||null,this.setCharacter(e.character,`【任務完成】${e.title}`),this.show(),this.showCurrentLine()}setCharacter(e,t){this.avatarEl.textContent=e.avatarIcon,this.nameEl.textContent=e.name,this.nameEl.style.color=e.color,this.roleEl.textContent=e.role,this.titleEl.textContent=t}show(){this.container.style.display="flex",document.pointerLockElement&&document.exitPointerLock()}hide(){if(this.container.style.display="none",this.onFinishCallback){const e=this.onFinishCallback;this.onFinishCallback=null,e()}}showCurrentLine(){if(this.lineIndex>=this.currentLines.length){this.hide();return}const e=this.currentLines[this.lineIndex];this.currentLineText=e,this.isTyping=!0,this.textEl.textContent="",this.btnEl.textContent=this.lineIndex===this.currentLines.length-1?"接受委託 / 繼續":"點擊繼續",this.typingTimer&&clearInterval(this.typingTimer);let t=0;this.typingTimer=setInterval(()=>{t<e.length?this.textEl.textContent=e.slice(0,++t):(this.isTyping=!1,clearInterval(this.typingTimer))},18)}handleNext(){this.isTyping?(this.typingTimer&&clearInterval(this.typingTimer),this.isTyping=!1,this.textEl.textContent=this.currentLineText):(this.lineIndex++,this.showCurrentLine())}dispose(){this.typingTimer&&clearInterval(this.typingTimer),this.container.remove()}}class X0{constructor(){this.currentGuideTab=0;const e=document.getElementById("ui-overlay");if(!e)throw new Error("ui-overlay not found");this.locationModal=document.createElement("div"),this.locationModal.className="location-modal",this.locationModal.style.display="none",this.timeReversalPanel=document.createElement("div"),this.timeReversalPanel.className="time-reversal-panel",this.timeReversalPanel.style.display="none",this.guideModal=this.createGuideModal(),e.appendChild(this.locationModal),e.appendChild(this.timeReversalPanel),e.appendChild(this.guideModal),this.setupKeyboardListeners(),this.unsubscribe=oe.subscribe(t=>this.update(t))}createGuideModal(){const e=document.createElement("div");e.className="guide-modal",e.style.display="none";const t=document.createElement("div");t.className="guide-header",t.innerHTML=`
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
            `)}setupKeyboardListeners(){window.addEventListener("keydown",e=>{oe.getState().gameMode!=="studio"&&(e.key.toLowerCase()==="l"?this.locationModal.style.display==="none"?this.showLocationSelector():this.hideLocationSelector():e.key.toLowerCase()==="r"||e.key.toLowerCase()==="t"?this.timeReversalPanel.style.display==="none"?this.showTimeReversal():this.hideTimeReversal():e.key.toLowerCase()==="h"||e.key==="?"?this.guideModal.style.display==="none"||this.guideModal.style.display===""?this.showGuide():this.hideGuide():e.code==="Escape"&&(this.guideModal.style.display!=="none"&&this.hideGuide(),this.locationModal.style.display!=="none"&&this.hideLocationSelector(),this.timeReversalPanel.style.display!=="none"&&this.hideTimeReversal()))})}showGuide(){this.switchGuideTab(this.currentGuideTab),this.guideModal.style.display="flex"}hideGuide(){this.guideModal.style.display="none"}showLocationSelector(){const e=oe.getState();this.locationModal.innerHTML=`
            <div class="location-list">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
                    <h2 style="font-size:18px;color:#fff;">選擇全球觀測地點</h2>
                    <button class="close-btn" id="close-loc">&times;</button>
                </div>
                <div class="locations-container"></div>
            </div>
        `;const t=this.locationModal.querySelector(".locations-container"),n=this.locationModal.querySelector("#close-loc");n.onclick=()=>this.hideLocationSelector(),Ys.forEach(i=>{const a=e.unlockedLocations?.includes(i.id)||i.id===Ys[0].id,r=e.currentLocation?.id===i.id,o=document.createElement("div");if(o.className=`location-card ${r?"current":""} ${a?"":"locked"}`,o.innerHTML=`
                <h3>${i.name} (${i.nameEn}) ${r?"（當前位置）":""}</h3>
                <p>經緯度: ${i.latitude.toFixed(2)}°, ${i.longitude.toFixed(2)}° | 海拔: ${i.altitude}m</p>
                <p>夜空光害等級: ${(i.lightPollution*100).toFixed(0)}%</p>
                <p class="desc">${i.description}</p>
            `,a){if(!r){const l=document.createElement("button");l.textContent="前往此處觀星",l.onclick=()=>{e.setLocation(i),this.hideLocationSelector()},o.appendChild(l)}}else{const l=document.createElement("button");l.textContent="解鎖此地點 ($500)",l.onclick=()=>{e.money>=500?(e.spendMoney(500),e.unlockLocation(i.id),this.showLocationSelector()):alert("金錢不足！需要 $500 解鎖新觀測站")},o.appendChild(l)}t.appendChild(o)}),this.locationModal.style.display="flex"}hideLocationSelector(){this.locationModal.style.display="none"}showTimeReversal(){const e=oe.getState(),t=e.currentTime,n=t.toLocaleString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),i=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),o=`${i}-${a}-${r}`,l=String(t.getHours()).padStart(2,"0"),c=String(t.getMinutes()).padStart(2,"0"),h=`${l}:${c}`,d=t.getHours();let u="觀星夜";d>=6&&d<17?u="白晝":d>=17&&d<19?u="黃昏":d>=5&&d<6&&(u="黎明"),this.timeReversalPanel.innerHTML=`
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
                <input type="time" id="input-custom-time" class="time-input-field" value="${h}">
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
        `;const p=this.timeReversalPanel.querySelector("#close-time");p.onclick=()=>this.hideTimeReversal();const g=this.timeReversalPanel.querySelector("#input-custom-date"),v=this.timeReversalPanel.querySelector("#input-custom-time"),m=this.timeReversalPanel.querySelector("#btn-apply-custom-date"),f=()=>{if(!g.value)return;const[y,N,A]=g.value.split("-").map(Number),[w,P]=(v.value||"21:00").split(":").map(Number),S=new Date(y,N-1,A,w,P,0);e.setTime(S),this.showTimeReversal()};m.onclick=f,g.onchange=f,v.onchange=f,this.timeReversalPanel.querySelector("#btn-sub-1y").addEventListener("click",()=>{e.advanceTimeYears(-1),this.showTimeReversal()}),this.timeReversalPanel.querySelector("#btn-sub-30d").addEventListener("click",()=>{e.advanceTimeDays(-30),this.showTimeReversal()}),this.timeReversalPanel.querySelector("#btn-sub-1d").addEventListener("click",()=>{e.advanceTimeDays(-1),this.showTimeReversal()}),this.timeReversalPanel.querySelector("#btn-add-1d").addEventListener("click",()=>{e.advanceTimeDays(1),this.showTimeReversal()}),this.timeReversalPanel.querySelector("#btn-add-30d").addEventListener("click",()=>{e.advanceTimeDays(30),this.showTimeReversal()}),this.timeReversalPanel.querySelector("#btn-add-1y").addEventListener("click",()=>{e.advanceTimeYears(1),this.showTimeReversal()});const T=(y,N)=>{const A=e.currentTime.getFullYear(),w=new Date(A,y,N,21,0,0);e.setTime(w),this.showTimeReversal()};this.timeReversalPanel.querySelector("#season-spring").addEventListener("click",()=>T(3,15)),this.timeReversalPanel.querySelector("#season-summer").addEventListener("click",()=>T(6,15)),this.timeReversalPanel.querySelector("#season-autumn").addEventListener("click",()=>T(9,15)),this.timeReversalPanel.querySelector("#season-winter").addEventListener("click",()=>T(0,15)),this.timeReversalPanel.querySelector("#btn-sub-6h").addEventListener("click",()=>{e.reverseTime(6),this.showTimeReversal()}),this.timeReversalPanel.querySelector("#btn-sub-1h").addEventListener("click",()=>{e.reverseTime(1),this.showTimeReversal()}),this.timeReversalPanel.querySelector("#btn-add-1h").addEventListener("click",()=>{e.advanceTimeHours(1),this.showTimeReversal()}),this.timeReversalPanel.querySelector("#btn-add-6h").addEventListener("click",()=>{e.advanceTimeHours(6),this.showTimeReversal()});const E=(y,N=0)=>{const A=new Date(e.currentTime);A.setHours(y,N,0,0),e.setTime(A),this.showTimeReversal()};this.timeReversalPanel.querySelector("#preset-dawn").addEventListener("click",()=>E(5,30)),this.timeReversalPanel.querySelector("#preset-noon").addEventListener("click",()=>E(12,0)),this.timeReversalPanel.querySelector("#preset-dusk").addEventListener("click",()=>E(18,30)),this.timeReversalPanel.querySelector("#preset-night").addEventListener("click",()=>E(21,0)),this.timeReversalPanel.querySelector("#preset-midnight").addEventListener("click",()=>E(1,0)),this.timeReversalPanel.querySelector("#btn-reset-realtime").addEventListener("click",()=>{e.resetToRealTime(),this.showTimeReversal()}),this.timeReversalPanel.style.display="block"}hideTimeReversal(){this.timeReversalPanel.style.display="none"}update(e){}dispose(){this.unsubscribe(),this.locationModal.remove(),this.timeReversalPanel.remove(),this.guideModal.remove()}}class q0{constructor(){this.clock=new Kl(!1),this.isRunning=!1,this.sunElevation=0,this.animationFrameId=0,this.savedWalkPos=new R(0,1.7,0),this.savedWalkRot=new Vt,this.animate=()=>{this.animationFrameId=requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.1),n=this.clock.getElapsedTime();this.update(t,n),this.render()};const e=document.getElementById("game-canvas");this.renderer=new Sm({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=ml,this.renderer.toneMappingExposure=.9,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=fl,this.scene=new Xl,this.camera=new Bt(60,window.innerWidth/window.innerHeight,.1,5e5),this.camera.position.set(0,1.7,0),window.addEventListener("resize",this.onResize.bind(this))}async init(e){e(0,"正在載入星表數據..."),this.starField=new Hm(this.scene),await this.starField.loadStars(),e(.15,"正在建構天球..."),this.celestialSphere=new Wm(this.scene),this.celestialSphere.group.add(this.starField.getStarGroup()),e(.2,"正在繪製星座..."),this.constellations=new qm(this.celestialSphere.group),e(.25,"正在放置深空天體..."),this.deepSkyObjects=new Ym(this.celestialSphere.group),e(.28,"正在計算太陽系行星與月球軌道..."),this.planetarySystem=new e0(this.celestialSphere.group),this.starIdentifier=new $m,e(.3,"正在初始化大氣..."),this.atmosphere=new t0(this.scene),this.timeManager=new n0,e(.4,"正在初始化天氣系統..."),this.weatherSystem=new i0,this.cloudLayer=new r0(this.scene),this.rainEffect=new c0(this.scene),e(.5,"正在初始化音效系統..."),this.audioManager=new h0,e(.55,"正在建構觀測場景..."),this.terrain=new x0(this.scene),this.telescopeModel=new M0(this.scene),this.studio=new y0(this.scene),e(.65,"正在初始化控制器與雙筒望遠鏡..."),this.playerController=new _0(this.camera,this.renderer.domElement,this.scene),this.binocularsMode=new U0(this.camera,this.renderer.domElement),e(.7,"正在校準望遠鏡光學..."),this.telescopeOptics=new S0,this.longExposure=new b0(this.renderer,window.innerWidth,window.innerHeight),this.postProcessing=new I0(this.renderer,this.scene,this.camera),e(.8,"正在載入遊戲與任務系統..."),this.photoManager=new F0,this.questManager=new O0,this.economySystem=new B0,e(.85,"正在建立介面與圖鑑..."),this.hud=new k0,this.telescopeHUD=new z0,this.studioUI=new V0,this.codexUI=new G0,this.photoLightbox=new H0,this.storyDialogue=new W0,this.menuSystem=new X0,this.setupInteractions(),e(1,"初始化完成！")}start(){if(this.isRunning)return;this.isRunning=!0,this.clock.start();const e=()=>{this.audioManager.init(),document.removeEventListener("click",e),document.removeEventListener("keydown",e)};document.addEventListener("click",e),document.addEventListener("keydown",e);const t=this.questManager.getNextQuest();t&&(oe.getState().completedQuestIds||[]).length===0&&(oe.getState().photos||[]).length===0&&setTimeout(()=>{this.storyDialogue.playIntroDialogue(t)},1500),this.animate()}update(e,t){const n=oe.getState();this.timeManager.update(e);const i=n.currentTime,a=n.currentLocation;this.weatherSystem.update(e*n.timeScale);const r=this.weatherSystem.getCloudCoverage();this.sunElevation=this.atmosphere.update(i,a.latitude,a.longitude),this.timeManager.setSunElevation(this.sunElevation),this.celestialSphere.updateOrientation(a.latitude,a.longitude,i);const o=Om(n.telescopeLevel),l=n.gameMode===Pe.Telescope,c=l?n.currentFov:this.camera.fov,h=a.lightPollution||0;let d=4.85;l?d=o.limitingMagnitude-h*1.2:c<35?d=8.8-h*1.2:d=Math.max(3.8,4.85-h*1.2),this.starField.update(t,c,this.sunElevation,d),this.deepSkyObjects.update(c,l,d),this.planetarySystem.update(i,c);const u=this.planetarySystem.getPlanets();this.constellations.update(this.sunElevation),(!n.showConstellations||n.gameMode===Pe.Studio)&&this.constellations.setVisible(!1),this.cloudLayer.update(e,r,new Ae(1,.5));const p=n.weather===Ge.Rainy;this.rainEffect.setVisible(p),p&&this.rainEffect.update(e,this.camera.position,1);const g=this.timeManager.getSunPhase();if(this.audioManager.setAmbientForPhase(g),this.audioManager.setWeatherAudio(n.weather,r),this.telescopeModel.update(this.camera.position),this.playerController.update(e),this.binocularsMode.update(e),n.gameMode===Pe.Telescope){this.camera.position.set(0,.2,0);const v=this.celestialSphere.getRaDecToVector(n.telescopeRa,n.telescopeDec);v.applyMatrix4(this.celestialSphere.group.matrixWorld),this.camera.lookAt(v),this.camera.fov=n.currentFov,this.camera.updateProjectionMatrix();const m=this.starIdentifier.identify(n.telescopeRa,n.telescopeDec,n.currentFov,this.celestialSphere,u);if(n.isExposing){this.longExposure.accumulate(this.scene,this.camera,1);const f=this.longExposure.getElapsedSeconds();n.updateExposureElapsed(f)}this.telescopeHUD.update(m,n.isExposing,this.longExposure.getElapsedSeconds(),this.longExposure.getSampleCount(),n.currentFov,60/n.currentFov,n.telescopeRa,n.telescopeDec)}n.gameMode===Pe.Walk?this.telescopeModel.isPlayerNear(this.camera.position)?this.hud.showInteractPrompt("按 E 使用望遠鏡"):this.studio.isPlayerNear(this.camera.position)?this.hud.showInteractPrompt("按 F 進入工作室"):this.hud.hideInteractPrompt():this.hud.hideInteractPrompt(),this.hud.update(n),this.hud.updateWaypoints(this.camera,this.telescopeModel.getPosition(),this.studio.getPosition()),this.hud.updateQuestTracker(this.questManager.getNextQuest())}render(){if(oe.getState().gameMode===Pe.Telescope){const t=this.telescopeOptics.getChromaticAberration();this.postProcessing.setTelescopeMode(!0,t,this.sunElevation)}else this.postProcessing.setTelescopeMode(!1,0,this.sunElevation);this.postProcessing.render()}setupInteractions(){oe.subscribe((e,t)=>{e.gameMode!==t.gameMode&&this.onModeChange(t.gameMode,e.gameMode),(e.masterVolume!==t.masterVolume||e.isMuted!==t.isMuted)&&this.audioManager.setMasterVolume(e.isMuted?0:e.masterVolume),e.ambientVolume!==t.ambientVolume&&this.audioManager.setCategory("ambient",e.ambientVolume),e.machineVolume!==t.machineVolume&&this.audioManager.setCategory("machine",e.machineVolume),e.weatherVolume!==t.weatherVolume&&this.audioManager.setCategory("weather",e.weatherVolume),e.sfxVolume!==t.sfxVolume&&this.audioManager.setCategory("sfx",e.sfxVolume)}),document.addEventListener("quest-completed",e=>{const t=e.detail.quest;this.hud.showNotification(`任務完成：${t.title}！獲得 $${t.rewards.money||0}`,"success"),this.hud.updateQuestTracker(this.questManager.getNextQuest()),this.storyDialogue.playCompleteDialogue(t,()=>{const n=this.questManager.getNextQuest();n&&setTimeout(()=>{this.storyDialogue.playIntroDialogue(n)},800)})}),document.addEventListener("play-story-dialogue",e=>{const{quest:t,mode:n}=e.detail;n==="complete"?this.storyDialogue.playCompleteDialogue(t):this.storyDialogue.playIntroDialogue(t)}),document.addEventListener("show-notification",e=>{this.hud.showNotification(e.detail.message,e.detail.type||"info")}),document.addEventListener("open-lightbox",e=>{const t=[...oe.getState().photos||[]].sort((i,a)=>{const r=i.timestamp instanceof Date?i.timestamp.getTime():new Date(i.timestamp).getTime();return(a.timestamp instanceof Date?a.timestamp.getTime():new Date(a.timestamp).getTime())-r}),n=t.findIndex(i=>i.id===e.detail.photoId);this.photoLightbox.open(t,Math.max(0,n))}),document.addEventListener("capture-photo",()=>{const e=oe.getState();if(e.gameMode===Pe.Telescope)if(!e.isExposing)this.longExposure.startExposure(),e.startExposure(),this.audioManager.playShutter();else{const t=this.starIdentifier.identify(e.telescopeRa,e.telescopeDec,e.currentFov,this.celestialSphere);this.finishExposure(t)}}),document.addEventListener("telescope-slew",()=>{this.audioManager.playMotor(.5)})}onModeChange(e,t){t===Pe.Telescope?(this.savedWalkPos.copy(this.camera.position),this.savedWalkRot.copy(this.camera.rotation),this.telescopeModel.setVisible(!1),this.terrain.setVisible(!0),this.studio.setVisible(!1),this.telescopeHUD.show()):e===Pe.Telescope&&(this.telescopeModel.setVisible(!0),this.terrain.setVisible(!0),this.studio.setVisible(!0),this.camera.position.copy(this.savedWalkPos),this.camera.rotation.copy(this.savedWalkRot),this.camera.fov=60,this.camera.updateProjectionMatrix(),oe.getState().setFov(60),this.telescopeHUD.hide()),t===Pe.Studio?this.studioUI.show():e===Pe.Studio&&this.studioUI.hide()}finishExposure(e){const t=oe.getState(),n=this.longExposure.finishExposure();t.stopExposure();const i=e?.name||"未知星野",a=e?.type||"star_field",r=this.photoManager.capturePhoto(this.renderer,this.scene,this.camera,{name:i,type:a,difficulty:1},n);this.audioManager.playShutter(),this.hud.showNotification(`照片已儲存: ${i}（曝光 ${n.toFixed(1)} 秒 · ${r.quality}級）`,"success")}onResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.postProcessing.resize(e,t),this.longExposure.resize(e,t)}dispose(){this.isRunning=!1,cancelAnimationFrame(this.animationFrameId),this.starField.dispose(),this.deepSkyObjects.dispose(),this.planetarySystem.dispose(),this.atmosphere.dispose(),this.cloudLayer.dispose(),this.rainEffect.dispose(),this.audioManager.dispose(),this.terrain.dispose(),this.telescopeModel.dispose(),this.studio.dispose(),this.playerController.dispose(),this.binocularsMode.dispose(),this.longExposure.dispose(),this.postProcessing.dispose(),this.hud.dispose(),this.telescopeHUD.dispose(),this.studioUI.dispose(),this.codexUI.dispose(),this.photoLightbox.dispose(),this.storyDialogue.dispose(),this.menuSystem.dispose(),this.renderer.dispose()}}async function dl(){const s=document.getElementById("loader-fill"),e=document.getElementById("loader-text"),t=(n,i)=>{s&&(s.style.width=`${n}%`),e&&(e.textContent=i)};try{t(10,"正在初始化渲染引擎...");const n=new q0;t(20,"正在載入星表數據..."),await n.init((a,r)=>t(20+a*.7,r)),t(95,"準備就緒..."),await new Promise(a=>setTimeout(a,300));const i=document.getElementById("loading-screen");i&&(i.classList.add("hidden"),setTimeout(()=>i.remove(),800)),t(100,""),n.start()}catch(n){console.error("Failed to initialize game:",n);const i=document.getElementById("loader-text");i&&(i.textContent=`初始化失敗: ${n}`,i.style.color="#f44336")}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",dl):dl();
