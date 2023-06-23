import"./MButton.vue_vue_type_style_index_0_scoped_c4139d08_lang-4ed993c7.js";import"./MNavigationDrawer.vue_vue_type_style_index_0_scoped_59ae9770_lang-4ed993c7.js";import"./MNavigationDrawerItem.vue_vue_type_style_index_0_scoped_d608ad47_lang-4ed993c7.js";import"./MTopBar.vue_vue_type_style_index_0_scoped_0d44906a_lang-4ed993c7.js";import{_ as he,o as le,c as ue}from"./app-275e2576.js";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e){return e<0?-1:e===0?0:1}function Ot(e,t,n){return(1-n)*e+n*t}function Yt(e,t,n){return n<e?e:n>t?t:n}function at(e,t,n){return n<e?e:n>t?t:n}function bt(e){return e=e%360,e<0&&(e=e+360),e}function W(e){return e=e%360,e<0&&(e=e+360),e}function vt(e,t){return W(t-e)<=180?1:-1}function Lt(e,t){return 180-Math.abs(Math.abs(e-t)-180)}function kt(e,t){const n=e[0]*t[0][0]+e[1]*t[0][1]+e[2]*t[0][2],r=e[0]*t[1][0]+e[1]*t[1][1]+e[2]*t[1][2],o=e[0]*t[2][0]+e[1]*t[2][1]+e[2]*t[2][2];return[n,r,o]}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],fe=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],Ht=[95.047,100,108.883];function dt(e,t,n){return(255<<24|(e&255)<<16|(t&255)<<8|n&255)>>>0}function Et(e){const t=nt(e[0]),n=nt(e[1]),r=nt(e[2]);return dt(t,n,r)}function It(e){return e>>24&255}function st(e){return e>>16&255}function it(e){return e>>8&255}function ct(e){return e&255}function me(e){return It(e)>=255}function Vt(e,t,n){const r=fe,o=r[0][0]*e+r[0][1]*t+r[0][2]*n,s=r[1][0]*e+r[1][1]*t+r[1][2]*n,a=r[2][0]*e+r[2][1]*t+r[2][2]*n,i=nt(o),h=nt(s),f=nt(a);return dt(i,h,f)}function Jt(e){const t=X(st(e)),n=X(it(e)),r=X(ct(e));return kt([t,n,r],Wt)}function Xt(e,t,n){const r=Ht,o=(e+16)/116,s=t/500+o,a=o-n/200,i=Mt(s),h=Mt(o),f=Mt(a),c=i*r[0],u=h*r[1],y=f*r[2];return Vt(c,u,y)}function Nt(e){const t=X(st(e)),n=X(it(e)),r=X(ct(e)),o=Wt,s=o[0][0]*t+o[0][1]*n+o[0][2]*r,a=o[1][0]*t+o[1][1]*n+o[1][2]*r,i=o[2][0]*t+o[2][1]*n+o[2][2]*r,h=Ht,f=s/h[0],c=a/h[1],u=i/h[2],y=ft(f),d=ft(c),p=ft(u),m=116*d-16,M=500*(y-d),k=200*(d-p);return[m,M,k]}function Qt(e){const t=Z(e),n=nt(t);return dt(n,n,n)}function mt(e){const t=Jt(e)[1];return 116*ft(t/100)-16}function Z(e){return 100*Mt((e+16)/116)}function At(e){return ft(e/100)*116-16}function X(e){const t=e/255;return t<=.040449936?t/12.92*100:Math.pow((t+.055)/1.055,2.4)*100}function nt(e){const t=e/100;let n=0;return t<=.0031308?n=t*12.92:n=1.055*Math.pow(t,1/2.4)-.055,Yt(0,255,Math.round(n*255))}function Zt(){return Ht}function de(e){const t=st(e),n=it(e),r=ct(e),o=It(e);return{r:t,g:n,b:r,a:o}}function pe({r:e,g:t,b:n,a:r}){const o=Pt(e),s=Pt(t),a=Pt(n);return Pt(r)<<24|o<<16|s<<8|a}function Pt(e){return e<0?0:e>255?255:e}function ft(e){const t=.008856451679035631,n=24389/27;return e>t?Math.pow(e,1/3):(n*e+16)/116}function Mt(e){const t=.008856451679035631,n=24389/27,r=e*e*e;return r>t?r:(116*e-16)/n}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static make(t=Zt(),n=200/Math.PI*Z(50)/100,r=50,o=2,s=!1){const a=t,i=a[0]*.401288+a[1]*.650173+a[2]*-.051461,h=a[0]*-.250268+a[1]*1.204414+a[2]*.045854,f=a[0]*-.002079+a[1]*.048952+a[2]*.953127,c=.8+o/10,u=c>=.9?Ot(.59,.69,(c-.9)*10):Ot(.525,.59,(c-.8)*10);let y=s?1:c*(1-1/3.6*Math.exp((-n-42)/92));y=y>1?1:y<0?0:y;const d=c,p=[y*(100/i)+1-y,y*(100/h)+1-y,y*(100/f)+1-y],m=1/(5*n+1),M=m*m*m*m,k=1-M,P=M*n+.1*k*k*Math.cbrt(5*n),b=Z(r)/t[1],x=1.48+Math.sqrt(b),w=.725/Math.pow(b,.2),B=w,C=[Math.pow(P*p[0]*i/100,.42),Math.pow(P*p[1]*h/100,.42),Math.pow(P*p[2]*f/100,.42)],T=[400*C[0]/(C[0]+27.13),400*C[1]/(C[1]+27.13),400*C[2]/(C[2]+27.13)],R=(2*T[0]+T[1]+.05*T[2])*w;return new j(b,R,w,B,u,d,p,P,Math.pow(P,.25),x)}constructor(t,n,r,o,s,a,i,h,f,c){this.n=t,this.aw=n,this.nbb=r,this.ncb=o,this.c=s,this.nc=a,this.rgbD=i,this.fl=h,this.fLRoot=f,this.z=c}}j.DEFAULT=j.make();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t,n,r,o,s,a,i,h,f){this.hue=t,this.chroma=n,this.j=r,this.q=o,this.m=s,this.s=a,this.jstar=i,this.astar=h,this.bstar=f}distance(t){const n=this.jstar-t.jstar,r=this.astar-t.astar,o=this.bstar-t.bstar,s=Math.sqrt(n*n+r*r+o*o);return 1.41*Math.pow(s,.63)}static fromInt(t){return L.fromIntInViewingConditions(t,j.DEFAULT)}static fromIntInViewingConditions(t,n){const r=(t&16711680)>>16,o=(t&65280)>>8,s=t&255,a=X(r),i=X(o),h=X(s),f=.41233895*a+.35762064*i+.18051042*h,c=.2126*a+.7152*i+.0722*h,u=.01932141*a+.11916382*i+.95034478*h,y=.401288*f+.650173*c-.051461*u,d=-.250268*f+1.204414*c+.045854*u,p=-.002079*f+.048952*c+.953127*u,m=n.rgbD[0]*y,M=n.rgbD[1]*d,k=n.rgbD[2]*p,P=Math.pow(n.fl*Math.abs(m)/100,.42),b=Math.pow(n.fl*Math.abs(M)/100,.42),x=Math.pow(n.fl*Math.abs(k)/100,.42),w=G(m)*400*P/(P+27.13),B=G(M)*400*b/(b+27.13),C=G(k)*400*x/(x+27.13),T=(11*w+-12*B+C)/11,R=(w+B-2*C)/9,D=(20*w+20*B+21*C)/20,N=(40*w+20*B+C)/20,U=Math.atan2(R,T)*180/Math.PI,H=U<0?U+360:U>=360?U-360:U,rt=H*Math.PI/180,pt=N*n.nbb,tt=100*Math.pow(pt/n.aw,n.c*n.z),gt=4/n.c*Math.sqrt(tt/100)*(n.aw+4)*n.fLRoot,Dt=H<20.14?H+360:H,Rt=.25*(Math.cos(Dt*Math.PI/180+2)+3.8),Bt=5e4/13*Rt*n.nc*n.ncb*Math.sqrt(T*T+R*R)/(D+.305),yt=Math.pow(Bt,.9)*Math.pow(1.64-Math.pow(.29,n.n),.73),Ut=yt*Math.sqrt(tt/100),qt=Ut*n.fLRoot,ae=50*Math.sqrt(yt*n.c/(n.aw+4)),se=(1+100*.007)*tt/(1+.007*tt),jt=1/.0228*Math.log(1+.0228*qt),ie=jt*Math.cos(rt),ce=jt*Math.sin(rt);return new L(H,Ut,tt,gt,qt,ae,se,ie,ce)}static fromJch(t,n,r){return L.fromJchInViewingConditions(t,n,r,j.DEFAULT)}static fromJchInViewingConditions(t,n,r,o){const s=4/o.c*Math.sqrt(t/100)*(o.aw+4)*o.fLRoot,a=n*o.fLRoot,i=n/Math.sqrt(t/100),h=50*Math.sqrt(i*o.c/(o.aw+4)),f=r*Math.PI/180,c=(1+100*.007)*t/(1+.007*t),u=1/.0228*Math.log(1+.0228*a),y=u*Math.cos(f),d=u*Math.sin(f);return new L(r,n,t,s,a,h,c,y,d)}static fromUcs(t,n,r){return L.fromUcsInViewingConditions(t,n,r,j.DEFAULT)}static fromUcsInViewingConditions(t,n,r,o){const s=n,a=r,i=Math.sqrt(s*s+a*a),f=(Math.exp(i*.0228)-1)/.0228/o.fLRoot;let c=Math.atan2(a,s)*(180/Math.PI);c<0&&(c+=360);const u=t/(1-(t-100)*.007);return L.fromJchInViewingConditions(u,f,c,o)}toInt(){return this.viewed(j.DEFAULT)}viewed(t){const n=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),r=Math.pow(n/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),o=this.hue*Math.PI/180,s=.25*(Math.cos(o+2)+3.8),a=t.aw*Math.pow(this.j/100,1/t.c/t.z),i=s*(5e4/13)*t.nc*t.ncb,h=a/t.nbb,f=Math.sin(o),c=Math.cos(o),u=23*(h+.305)*r/(23*i+11*r*c+108*r*f),y=u*c,d=u*f,p=(460*h+451*y+288*d)/1403,m=(460*h-891*y-261*d)/1403,M=(460*h-220*y-6300*d)/1403,k=Math.max(0,27.13*Math.abs(p)/(400-Math.abs(p))),P=G(p)*(100/t.fl)*Math.pow(k,1/.42),b=Math.max(0,27.13*Math.abs(m)/(400-Math.abs(m))),x=G(m)*(100/t.fl)*Math.pow(b,1/.42),w=Math.max(0,27.13*Math.abs(M)/(400-Math.abs(M))),B=G(M)*(100/t.fl)*Math.pow(w,1/.42),C=P/t.rgbD[0],T=x/t.rgbD[1],R=B/t.rgbD[2],D=1.86206786*C-1.01125463*T+.14918677*R,N=.38752654*C+.62144744*T-.00897398*R,q=-.0158415*C-.03412294*T+1.04996444*R;return Vt(D,N,q)}static fromXyzInViewingConditions(t,n,r,o){const s=.401288*t+.650173*n-.051461*r,a=-.250268*t+1.204414*n+.045854*r,i=-.002079*t+.048952*n+.953127*r,h=o.rgbD[0]*s,f=o.rgbD[1]*a,c=o.rgbD[2]*i,u=Math.pow(o.fl*Math.abs(h)/100,.42),y=Math.pow(o.fl*Math.abs(f)/100,.42),d=Math.pow(o.fl*Math.abs(c)/100,.42),p=G(h)*400*u/(u+27.13),m=G(f)*400*y/(y+27.13),M=G(c)*400*d/(d+27.13),k=(11*p+-12*m+M)/11,P=(p+m-2*M)/9,b=(20*p+20*m+21*M)/20,x=(40*p+20*m+M)/20,B=Math.atan2(P,k)*180/Math.PI,C=B<0?B+360:B>=360?B-360:B,T=C*Math.PI/180,R=x*o.nbb,D=100*Math.pow(R/o.aw,o.c*o.z),N=4/o.c*Math.sqrt(D/100)*(o.aw+4)*o.fLRoot,q=C<20.14?C+360:C,U=1/4*(Math.cos(q*Math.PI/180+2)+3.8),rt=5e4/13*U*o.nc*o.ncb*Math.sqrt(k*k+P*P)/(b+.305),pt=Math.pow(rt,.9)*Math.pow(1.64-Math.pow(.29,o.n),.73),tt=pt*Math.sqrt(D/100),gt=tt*o.fLRoot,Dt=50*Math.sqrt(pt*o.c/(o.aw+4)),Rt=(1+100*.007)*D/(1+.007*D),wt=Math.log(1+.0228*gt)/.0228,Bt=wt*Math.cos(T),yt=wt*Math.sin(T);return new L(C,tt,D,N,gt,Dt,Rt,Bt,yt)}xyzInViewingConditions(t){const n=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),r=Math.pow(n/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),o=this.hue*Math.PI/180,s=.25*(Math.cos(o+2)+3.8),a=t.aw*Math.pow(this.j/100,1/t.c/t.z),i=s*(5e4/13)*t.nc*t.ncb,h=a/t.nbb,f=Math.sin(o),c=Math.cos(o),u=23*(h+.305)*r/(23*i+11*r*c+108*r*f),y=u*c,d=u*f,p=(460*h+451*y+288*d)/1403,m=(460*h-891*y-261*d)/1403,M=(460*h-220*y-6300*d)/1403,k=Math.max(0,27.13*Math.abs(p)/(400-Math.abs(p))),P=G(p)*(100/t.fl)*Math.pow(k,1/.42),b=Math.max(0,27.13*Math.abs(m)/(400-Math.abs(m))),x=G(m)*(100/t.fl)*Math.pow(b,1/.42),w=Math.max(0,27.13*Math.abs(M)/(400-Math.abs(M))),B=G(M)*(100/t.fl)*Math.pow(w,1/.42),C=P/t.rgbD[0],T=x/t.rgbD[1],R=B/t.rgbD[2],D=1.86206786*C-1.01125463*T+.14918677*R,N=.38752654*C+.62144744*T-.00897398*R,q=-.0158415*C-.03412294*T+1.04996444*R;return[D,N,q]}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static sanitizeRadians(t){return(t+Math.PI*8)%(Math.PI*2)}static trueDelinearized(t){const n=t/100;let r=0;return n<=.0031308?r=n*12.92:r=1.055*Math.pow(n,1/2.4)-.055,r*255}static chromaticAdaptation(t){const n=Math.pow(Math.abs(t),.42);return G(t)*400*n/(n+27.13)}static hueOf(t){const n=kt(t,A.SCALED_DISCOUNT_FROM_LINRGB),r=A.chromaticAdaptation(n[0]),o=A.chromaticAdaptation(n[1]),s=A.chromaticAdaptation(n[2]),a=(11*r+-12*o+s)/11,i=(r+o-2*s)/9;return Math.atan2(i,a)}static areInCyclicOrder(t,n,r){const o=A.sanitizeRadians(n-t),s=A.sanitizeRadians(r-t);return o<s}static intercept(t,n,r){return(n-t)/(r-t)}static lerpPoint(t,n,r){return[t[0]+(r[0]-t[0])*n,t[1]+(r[1]-t[1])*n,t[2]+(r[2]-t[2])*n]}static setCoordinate(t,n,r,o){const s=A.intercept(t[o],n,r[o]);return A.lerpPoint(t,s,r)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,n){const r=A.Y_FROM_LINRGB[0],o=A.Y_FROM_LINRGB[1],s=A.Y_FROM_LINRGB[2],a=n%4<=1?0:100,i=n%2===0?0:100;if(n<4){const h=a,f=i,c=(t-h*o-f*s)/r;return A.isBounded(c)?[c,h,f]:[-1,-1,-1]}else if(n<8){const h=a,f=i,c=(t-f*r-h*s)/o;return A.isBounded(c)?[f,c,h]:[-1,-1,-1]}else{const h=a,f=i,c=(t-h*r-f*o)/s;return A.isBounded(c)?[h,f,c]:[-1,-1,-1]}}static bisectToSegment(t,n){let r=[-1,-1,-1],o=r,s=0,a=0,i=!1,h=!0;for(let f=0;f<12;f++){const c=A.nthVertex(t,f);if(c[0]<0)continue;const u=A.hueOf(c);if(!i){r=c,o=c,s=u,a=u,i=!0;continue}(h||A.areInCyclicOrder(s,u,a))&&(h=!1,A.areInCyclicOrder(s,n,u)?(o=c,a=u):(r=c,s=u))}return[r,o]}static midpoint(t,n){return[(t[0]+n[0])/2,(t[1]+n[1])/2,(t[2]+n[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,n){const r=A.bisectToSegment(t,n);let o=r[0],s=A.hueOf(o),a=r[1];for(let i=0;i<3;i++)if(o[i]!==a[i]){let h=-1,f=255;o[i]<a[i]?(h=A.criticalPlaneBelow(A.trueDelinearized(o[i])),f=A.criticalPlaneAbove(A.trueDelinearized(a[i]))):(h=A.criticalPlaneAbove(A.trueDelinearized(o[i])),f=A.criticalPlaneBelow(A.trueDelinearized(a[i])));for(let c=0;c<8&&!(Math.abs(f-h)<=1);c++){const u=Math.floor((h+f)/2),y=A.CRITICAL_PLANES[u],d=A.setCoordinate(o,y,a,i),p=A.hueOf(d);A.areInCyclicOrder(s,n,p)?(a=d,f=u):(o=d,s=p,h=u)}}return A.midpoint(o,a)}static inverseChromaticAdaptation(t){const n=Math.abs(t),r=Math.max(0,27.13*n/(400-n));return G(t)*Math.pow(r,1/.42)}static findResultByJ(t,n,r){let o=Math.sqrt(r)*11;const s=j.DEFAULT,a=1/Math.pow(1.64-Math.pow(.29,s.n),.73),h=.25*(Math.cos(t+2)+3.8)*(5e4/13)*s.nc*s.ncb,f=Math.sin(t),c=Math.cos(t);for(let u=0;u<5;u++){const y=o/100,d=n===0||o===0?0:n/Math.sqrt(y),p=Math.pow(d*a,1/.9),M=s.aw*Math.pow(y,1/s.c/s.z)/s.nbb,k=23*(M+.305)*p/(23*h+11*p*c+108*p*f),P=k*c,b=k*f,x=(460*M+451*P+288*b)/1403,w=(460*M-891*P-261*b)/1403,B=(460*M-220*P-6300*b)/1403,C=A.inverseChromaticAdaptation(x),T=A.inverseChromaticAdaptation(w),R=A.inverseChromaticAdaptation(B),D=kt([C,T,R],A.LINRGB_FROM_SCALED_DISCOUNT);if(D[0]<0||D[1]<0||D[2]<0)return 0;const N=A.Y_FROM_LINRGB[0],q=A.Y_FROM_LINRGB[1],U=A.Y_FROM_LINRGB[2],H=N*D[0]+q*D[1]+U*D[2];if(H<=0)return 0;if(u===4||Math.abs(H-r)<.002)return D[0]>100.01||D[1]>100.01||D[2]>100.01?0:Et(D);o=o-(H-r)*o/(2*H)}return 0}static solveToInt(t,n,r){if(n<1e-4||r<1e-4||r>99.9999)return Qt(r);t=W(t);const o=t/180*Math.PI,s=Z(r),a=A.findResultByJ(o,n,s);if(a!==0)return a;const i=A.bisectToLimit(s,o);return Et(i)}static solveToCam(t,n,r){return L.fromInt(A.solveToInt(t,n,r))}}A.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];A.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];A.Y_FROM_LINRGB=[.2126,.7152,.0722];A.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{static from(t,n,r){return new S(A.solveToInt(t,n,r))}static fromInt(t){return new S(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(A.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(A.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(A.solveToInt(this.internalHue,this.internalChroma,t))}constructor(t){this.argb=t;const n=L.fromInt(t);this.internalHue=n.hue,this.internalChroma=n.chroma,this.internalTone=mt(t),this.argb=t}setInternalState(t){const n=L.fromInt(t);this.internalHue=n.hue,this.internalChroma=n.chroma,this.internalTone=mt(t),this.argb=t}inViewingConditions(t){const r=L.fromInt(this.toInt()).xyzInViewingConditions(t),o=L.fromXyzInViewingConditions(r[0],r[1],r[2],j.make());return S.from(o.hue,o.chroma,At(r[1]))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{static harmonize(t,n){const r=S.fromInt(t),o=S.fromInt(n),s=Lt(r.hue,o.hue),a=Math.min(s*.5,15),i=W(r.hue+a*vt(r.hue,o.hue));return S.from(i,r.chroma,r.tone).toInt()}static hctHue(t,n,r){const o=Tt.cam16Ucs(t,n,r),s=L.fromInt(o),a=L.fromInt(t);return S.from(s.hue,a.chroma,mt(t)).toInt()}static cam16Ucs(t,n,r){const o=L.fromInt(t),s=L.fromInt(n),a=o.jstar,i=o.astar,h=o.bstar,f=s.jstar,c=s.astar,u=s.bstar,y=a+(f-a)*r,d=i+(c-i)*r,p=h+(u-h)*r;return L.fromUcs(y,d,p).toInt()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{static ratioOfTones(t,n){return t=at(0,100,t),n=at(0,100,n),V.ratioOfYs(Z(t),Z(n))}static ratioOfYs(t,n){const r=t>n?t:n,o=r===n?t:n;return(r+5)/(o+5)}static lighter(t,n){if(t<0||t>100)return-1;const r=Z(t),o=n*(r+5)-5,s=V.ratioOfYs(o,r),a=Math.abs(s-n);if(s<n&&a>.04)return-1;const i=At(o)+.4;return i<0||i>100?-1:i}static darker(t,n){if(t<0||t>100)return-1;const r=Z(t),o=(r+5)/n-5,s=V.ratioOfYs(r,o),a=Math.abs(s-n);if(s<n&&a>.04)return-1;const i=At(o)-.4;return i<0||i>100?-1:i}static lighterUnsafe(t,n){const r=V.lighter(t,n);return r<0?100:r}static darkerUnsafe(t,n){const r=V.darker(t,n);return r<0?0:r}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{static isDisliked(t){const n=Math.round(t.hue)>=90&&Math.round(t.hue)<=111,r=Math.round(t.chroma)>16,o=Math.round(t.tone)<65;return n&&r&&o}static fixIfDisliked(t){return ht.isDisliked(t)?S.from(t.hue,t.chroma,70):t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{static fromPalette(t){return new g(n=>t.palette(n).hue,n=>t.palette(n).chroma,t.tone,n=>g.toneMinContrastDefault({tone:t.tone,scheme:n,background:t.background,toneDeltaConstraint:t.toneDeltaConstraint}),n=>g.toneMaxContrastDefault({tone:t.tone,scheme:n,background:t.background,toneDeltaConstraint:t.toneDeltaConstraint}),t.background,t.toneDeltaConstraint)}static fromHueAndChroma(t){return new g(t.hue,t.chroma,t.tone,n=>g.toneMinContrastDefault({tone:t.tone,scheme:n,background:t.background,toneDeltaConstraint:t.toneDeltaConstraint}),n=>g.toneMaxContrastDefault({tone:t.tone,scheme:n,background:t.background,toneDeltaConstraint:t.toneDeltaConstraint}),t.background,t.toneDeltaConstraint)}static fromArgb(t){return new g(n=>S.fromInt(t.argb(n)).hue,n=>S.fromInt(t.argb(n)).chroma,n=>{var r;return((r=t.tone)==null?void 0:r.call(t,n))??S.fromInt(t.argb(n)).tone},n=>g.toneMinContrastDefault({tone:r=>{var o;return((o=t.tone)==null?void 0:o.call(t,r))??S.fromInt(t.argb(r)).tone},scheme:n,background:t.background,toneDeltaConstraint:t.toneDeltaConstraint}),n=>g.toneMaxContrastDefault({tone:r=>{var o;return((o=t.tone)==null?void 0:o.call(t,r))??S.fromInt(t.argb(r)).tone},scheme:n,background:t.background,toneDeltaConstraint:t.toneDeltaConstraint}),t.background,t.toneDeltaConstraint)}constructor(t,n,r,o,s,a,i){this.hue=t,this.chroma=n,this.tone=r,this.toneMinContrast=o,this.toneMaxContrast=s,this.background=a,this.toneDeltaConstraint=i,this.hctCache=new Map}getArgb(t){return this.getHct(t).toInt()}getHct(t){const n=this.hctCache.get(t);if(n!=null)return n;const r=S.from(this.hue(t),this.chroma(t),this.getTone(t));return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(t,r),r}getTone(t){var h,f;let n=this.tone(t);const r=t.contrastLevel<0;if(t.contrastLevel!==0){const c=this.tone(t);n=((r?this.toneMinContrast(t):this.toneMaxContrast(t))-c)*Math.abs(t.contrastLevel)+c}const o=(h=this.background)==null?void 0:h.call(this,t);let s,a,i;if(o!=null){const c=((f=o==null?void 0:o.background)==null?void 0:f.call(o,t))!=null;if(s=V.ratioOfTones(this.tone(t),o.tone(t)),r){const u=V.ratioOfTones(this.toneMinContrast(t),o.toneMinContrast(t));a=c?u:null,i=s}else{const u=V.ratioOfTones(this.toneMaxContrast(t),o.toneMaxContrast(t));a=c?Math.min(u,s):null,i=c?Math.max(u,s):null}}return n=g.calculateDynamicTone({scheme:t,toneStandard:this.tone,toneToJudge:c=>c.getTone(t),desiredTone:(c,u)=>n,background:o!=null?c=>o:void 0,toneDeltaConstraint:this.toneDeltaConstraint,minRatio:c=>a??1,maxRatio:c=>i??21}),n}static ensureToneDelta(t,n,r,o,s){const a=o?o(r):null;if(a==null||s==null)return t;const i=a.delta,h=s(a.keepAway),f=Math.abs(t-h);if(f>i)return t;switch(a.keepAwayPolarity){case"darker":return at(0,100,h+i);case"lighter":return at(0,100,h-i);case"no-preference":const c=a.keepAway.tone(r),u=n>c,y=Math.abs(f-i);return(u?t+y<=100:t<y)?t+y:t-y;default:return t}}static foregroundTone(t,n){const r=V.lighterUnsafe(t,n),o=V.darkerUnsafe(t,n),s=V.ratioOfTones(r,t),a=V.ratioOfTones(o,t);if(g.tonePrefersLightForeground(t)){const h=Math.abs(s-a)<.1&&s<n&&a<n;return s>=n||s>=a||h?r:o}else return a>=n||a>=s?o:r}static calculateDynamicTone(t){var b;const n=t.background,r=t.scheme,o=t.toneStandard,s=t.toneToJudge,a=t.desiredTone,i=t.minRatio,h=t.maxRatio,f=t.toneDeltaConstraint,c=o(r);let u=c;const y=n==null?void 0:n(r);if(y==null)return u;const d=y.tone(r),p=V.ratioOfTones(c,d),m=s(y),M=a(p,m),k=V.ratioOfTones(m,M),P=at((i==null?void 0:i(p))??1,(h==null?void 0:h(p))??21,k);return P===k?u=M:u=g.foregroundTone(m,P),((b=y.background)==null?void 0:b.call(y,r))==null&&(u=g.enableLightForeground(u)),u=g.ensureToneDelta(u,c,r,f,x=>s(x)),u}static toneMaxContrastDefault(t){return g.calculateDynamicTone({scheme:t.scheme,toneStandard:t.tone,toneToJudge:n=>n.toneMaxContrast(t.scheme),desiredTone:(n,r)=>{var s,a,i;return((i=(a=(s=t.background)==null?void 0:s.call(t,t.scheme))==null?void 0:a.background)==null?void 0:i.call(a,t.scheme))!=null?g.foregroundTone(r,7):g.foregroundTone(r,Math.max(7,n))},background:t.background,toneDeltaConstraint:t.toneDeltaConstraint})}static toneMinContrastDefault(t){return g.calculateDynamicTone({scheme:t.scheme,toneStandard:t.tone,toneToJudge:n=>n.toneMinContrast(t.scheme),desiredTone:(n,r)=>{var s,a,i;let o=t.tone(t.scheme);return n>=7?o=g.foregroundTone(r,4.5):n>=3?o=g.foregroundTone(r,3):((i=(a=(s=t.background)==null?void 0:s.call(t,t.scheme))==null?void 0:a.background)==null?void 0:i.call(a,t.scheme))!=null&&(o=g.foregroundTone(r,n)),o},background:t.background,toneDeltaConstraint:t.toneDeltaConstraint,minRatio:n=>1,maxRatio:n=>n})}static tonePrefersLightForeground(t){return Math.round(t)<60}static toneAllowsLightForeground(t){return Math.round(t)<=49}static enableLightForeground(t){return g.tonePrefersLightForeground(t)&&!g.toneAllowsLightForeground(t)?49:t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(e){e[e.MONOCHROME=0]="MONOCHROME",e[e.NEUTRAL=1]="NEUTRAL",e[e.TONAL_SPOT=2]="TONAL_SPOT",e[e.VIBRANT=3]="VIBRANT",e[e.EXPRESSIVE=4]="EXPRESSIVE",e[e.FIDELITY=5]="FIDELITY",e[e.CONTENT=6]="CONTENT"})(Y||(Y={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,n,r){this.delta=t,this.keepAway=n,this.keepAwayPolarity=r}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(e){return e.variant===Y.FIDELITY||e.variant===Y.CONTENT}function O(e){return e.variant===Y.MONOCHROME}function ge(e,t,n,r){let o=n,s=S.from(e,t,n);if(s.chroma<t){let a=s.chroma;for(;s.chroma<t;){o+=r?-1:1;const i=S.from(e,t,o);if(a>i.chroma||Math.abs(i.chroma-t)<.4)break;const h=Math.abs(i.chroma-t),f=Math.abs(s.chroma-t);h<f&&(s=i),a=Math.max(a,i.chroma)}}return o}function ye(e){return j.make(void 0,void 0,e.isDark?30:80,void 0,void 0)}function zt(e,t){const n=e.inViewingConditions(ye(t));return g.tonePrefersLightForeground(e.tone)&&!g.toneAllowsLightForeground(n.tone)?g.enableLightForeground(e.tone):g.enableLightForeground(n.tone)}class l{static highestSurface(t){return t.isDark?l.surfaceBright:l.surfaceDim}}l.contentAccentToneDelta=15;l.background=g.fromPalette({palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98});l.onBackground=g.fromPalette({palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>l.background});l.surface=g.fromPalette({palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98});l.surfaceDim=g.fromPalette({palette:e=>e.neutralPalette,tone:e=>e.isDark?6:87});l.surfaceBright=g.fromPalette({palette:e=>e.neutralPalette,tone:e=>e.isDark?24:98});l.surfaceContainerLowest=g.fromPalette({palette:e=>e.neutralPalette,tone:e=>e.isDark?4:100});l.surfaceContainerLow=g.fromPalette({palette:e=>e.neutralPalette,tone:e=>e.isDark?10:96});l.surfaceContainer=g.fromPalette({palette:e=>e.neutralPalette,tone:e=>e.isDark?12:94});l.surfaceContainerHigh=g.fromPalette({palette:e=>e.neutralPalette,tone:e=>e.isDark?17:92});l.surfaceContainerHighest=g.fromPalette({palette:e=>e.neutralPalette,tone:e=>e.isDark?22:90});l.onSurface=g.fromPalette({palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>l.highestSurface(e)});l.surfaceVariant=g.fromPalette({palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:90});l.onSurfaceVariant=g.fromPalette({palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?80:30,background:e=>l.surfaceVariant});l.inverseSurface=g.fromPalette({palette:e=>e.neutralPalette,tone:e=>e.isDark?90:20});l.inverseOnSurface=g.fromPalette({palette:e=>e.neutralPalette,tone:e=>e.isDark?20:95,background:e=>l.inverseSurface});l.outline=g.fromPalette({palette:e=>e.neutralVariantPalette,tone:e=>50,background:e=>l.highestSurface(e)});l.outlineVariant=g.fromPalette({palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:80,background:e=>l.highestSurface(e)});l.shadow=g.fromPalette({palette:e=>e.neutralPalette,tone:e=>0});l.scrim=g.fromPalette({palette:e=>e.neutralPalette,tone:e=>0});l.surfaceTintColor=g.fromPalette({palette:e=>e.primaryPalette,tone:e=>e.isDark?80:40});l.primary=g.fromPalette({palette:e=>e.primaryPalette,tone:e=>O(e)?e.isDark?100:0:e.isDark?80:40,background:e=>l.highestSurface(e),toneDeltaConstraint:e=>new xt(l.contentAccentToneDelta,l.primaryContainer,e.isDark?"darker":"lighter")});l.onPrimary=g.fromPalette({palette:e=>e.primaryPalette,tone:e=>O(e)?e.isDark?10:90:e.isDark?20:100,background:e=>l.primary});l.primaryContainer=g.fromPalette({palette:e=>e.primaryPalette,tone:e=>O(e)?e.isDark?85:25:lt(e)?zt(e.sourceColorHct,e):e.isDark?30:90,background:e=>l.highestSurface(e)});l.onPrimaryContainer=g.fromPalette({palette:e=>e.primaryPalette,tone:e=>O(e)?e.isDark?0:100:lt(e)?g.foregroundTone(l.primaryContainer.tone(e),4.5):e.isDark?90:10,background:e=>l.primaryContainer});l.inversePrimary=g.fromPalette({palette:e=>e.primaryPalette,tone:e=>e.isDark?40:80,background:e=>l.inverseSurface});l.inverseOnPrimary=g.fromPalette({palette:e=>e.primaryPalette,tone:e=>e.isDark?100:20,background:e=>l.inversePrimary});l.secondary=g.fromPalette({palette:e=>e.secondaryPalette,tone:e=>e.isDark?80:40,background:e=>l.highestSurface(e),toneDeltaConstraint:e=>new xt(l.contentAccentToneDelta,l.secondaryContainer,e.isDark?"darker":"lighter")});l.onSecondary=g.fromPalette({palette:e=>e.secondaryPalette,tone:e=>O(e)?e.isDark?10:100:e.isDark?20:100,background:e=>l.secondary});l.secondaryContainer=g.fromPalette({palette:e=>e.secondaryPalette,tone:e=>{const t=e.isDark?30:90;if(O(e))return e.isDark?30:85;if(!lt(e))return t;let n=ge(e.secondaryPalette.hue,e.secondaryPalette.chroma,t,!e.isDark);return n=zt(e.secondaryPalette.getHct(n),e),n},background:e=>l.highestSurface(e)});l.onSecondaryContainer=g.fromPalette({palette:e=>e.secondaryPalette,tone:e=>lt(e)?g.foregroundTone(l.secondaryContainer.tone(e),4.5):e.isDark?90:10,background:e=>l.secondaryContainer});l.tertiary=g.fromPalette({palette:e=>e.tertiaryPalette,tone:e=>O(e)?e.isDark?90:25:e.isDark?80:40,background:e=>l.highestSurface(e),toneDeltaConstraint:e=>new xt(l.contentAccentToneDelta,l.tertiaryContainer,e.isDark?"darker":"lighter")});l.onTertiary=g.fromPalette({palette:e=>e.tertiaryPalette,tone:e=>O(e)?e.isDark?10:90:e.isDark?20:100,background:e=>l.tertiary});l.tertiaryContainer=g.fromPalette({palette:e=>e.tertiaryPalette,tone:e=>{if(O(e))return e.isDark?60:49;if(!lt(e))return e.isDark?30:90;const t=zt(e.tertiaryPalette.getHct(e.sourceColorHct.tone),e),n=e.tertiaryPalette.getHct(t);return ht.fixIfDisliked(n).tone},background:e=>l.highestSurface(e)});l.onTertiaryContainer=g.fromPalette({palette:e=>e.tertiaryPalette,tone:e=>O(e)?e.isDark?0:100:lt(e)?g.foregroundTone(l.tertiaryContainer.tone(e),4.5):e.isDark?90:10,background:e=>l.tertiaryContainer});l.error=g.fromPalette({palette:e=>e.errorPalette,tone:e=>e.isDark?80:40,background:e=>l.highestSurface(e),toneDeltaConstraint:e=>new xt(l.contentAccentToneDelta,l.errorContainer,e.isDark?"darker":"lighter")});l.onError=g.fromPalette({palette:e=>e.errorPalette,tone:e=>e.isDark?20:100,background:e=>l.error});l.errorContainer=g.fromPalette({palette:e=>e.errorPalette,tone:e=>e.isDark?30:90,background:e=>l.highestSurface(e)});l.onErrorContainer=g.fromPalette({palette:e=>e.errorPalette,tone:e=>e.isDark?90:10,background:e=>l.errorContainer});l.primaryFixed=g.fromPalette({palette:e=>e.primaryPalette,tone:e=>O(e)?e.isDark?100:10:90,background:e=>l.highestSurface(e)});l.primaryFixedDim=g.fromPalette({palette:e=>e.primaryPalette,tone:e=>O(e)?e.isDark?90:20:80,background:e=>l.highestSurface(e)});l.onPrimaryFixed=g.fromPalette({palette:e=>e.primaryPalette,tone:e=>O(e)?e.isDark?10:90:10,background:e=>l.primaryFixedDim});l.onPrimaryFixedVariant=g.fromPalette({palette:e=>e.primaryPalette,tone:e=>O(e)?e.isDark?30:70:30,background:e=>l.primaryFixedDim});l.secondaryFixed=g.fromPalette({palette:e=>e.secondaryPalette,tone:e=>O(e)?80:90,background:e=>l.highestSurface(e)});l.secondaryFixedDim=g.fromPalette({palette:e=>e.secondaryPalette,tone:e=>O(e)?70:80,background:e=>l.highestSurface(e)});l.onSecondaryFixed=g.fromPalette({palette:e=>e.secondaryPalette,tone:e=>10,background:e=>l.secondaryFixedDim});l.onSecondaryFixedVariant=g.fromPalette({palette:e=>e.secondaryPalette,tone:e=>O(e)?25:30,background:e=>l.secondaryFixedDim});l.tertiaryFixed=g.fromPalette({palette:e=>e.tertiaryPalette,tone:e=>O(e)?40:90,background:e=>l.highestSurface(e)});l.tertiaryFixedDim=g.fromPalette({palette:e=>e.tertiaryPalette,tone:e=>O(e)?30:80,background:e=>l.highestSurface(e)});l.onTertiaryFixed=g.fromPalette({palette:e=>e.tertiaryPalette,tone:e=>O(e)?90:10,background:e=>l.tertiaryFixedDim});l.onTertiaryFixedVariant=g.fromPalette({palette:e=>e.tertiaryPalette,tone:e=>O(e)?70:30,background:e=>l.tertiaryFixedDim});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{static fromInt(t){const n=S.fromInt(t);return I.fromHueAndChroma(n.hue,n.chroma)}static fromHueAndChroma(t,n){return new I(t,n)}constructor(t,n){this.hue=t,this.chroma=n,this.cache=new Map}tone(t){let n=this.cache.get(t);return n===void 0&&(n=S.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,n)),n}getHct(t){return S.fromInt(this.tone(t))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static of(t){return new F(t,!1)}static contentOf(t){return new F(t,!0)}static fromColors(t){return F.createPaletteFromColors(!1,t)}static contentFromColors(t){return F.createPaletteFromColors(!0,t)}static createPaletteFromColors(t,n){const r=new F(n.primary,t);if(n.secondary){const o=new F(n.secondary,t);r.a2=o.a1}if(n.tertiary){const o=new F(n.tertiary,t);r.a3=o.a1}if(n.error){const o=new F(n.error,t);r.error=o.a1}if(n.neutral){const o=new F(n.neutral,t);r.n1=o.n1}if(n.neutralVariant){const o=new F(n.neutralVariant,t);r.n2=o.n2}return r}constructor(t,n){const r=S.fromInt(t),o=r.hue,s=r.chroma;n?(this.a1=I.fromHueAndChroma(o,s),this.a2=I.fromHueAndChroma(o,s/3),this.a3=I.fromHueAndChroma(o+60,s/2),this.n1=I.fromHueAndChroma(o,Math.min(s/12,4)),this.n2=I.fromHueAndChroma(o,Math.min(s/6,8))):(this.a1=I.fromHueAndChroma(o,Math.max(48,s)),this.a2=I.fromHueAndChroma(o,16),this.a3=I.fromHueAndChroma(o+60,24),this.n1=I.fromHueAndChroma(o,4),this.n2=I.fromHueAndChroma(o,8)),this.error=I.fromHueAndChroma(25,84)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{fromInt(t){return Nt(t)}toInt(t){return Xt(t[0],t[1],t[2])}distance(t,n){const r=t[0]-n[0],o=t[1]-n[1],s=t[2]-n[2];return r*r+o*o+s*s}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=10,Me=3;class Kt{static quantize(t,n,r){const o=new Map,s=new Array,a=new Array,i=new Pe;let h=0;for(let P=0;P<t.length;P++){const b=t[P],x=o.get(b);x===void 0?(h++,s.push(i.fromInt(b)),a.push(b),o.set(b,1)):o.set(b,x+1)}const f=new Array;for(let P=0;P<h;P++){const b=a[P],x=o.get(b);x!==void 0&&(f[P]=x)}let c=Math.min(r,h);n.length>0&&(c=Math.min(c,n.length));const u=new Array;for(let P=0;P<n.length;P++)u.push(i.fromInt(n[P]));const y=c-u.length;if(n.length===0&&y>0)for(let P=0;P<y;P++){const b=Math.random()*100,x=Math.random()*(100- -100+1)+-100,w=Math.random()*(100- -100+1)+-100;u.push(new Array(b,x,w))}const d=new Array;for(let P=0;P<h;P++)d.push(Math.floor(Math.random()*c));const p=new Array;for(let P=0;P<c;P++){p.push(new Array);for(let b=0;b<c;b++)p[P].push(0)}const m=new Array;for(let P=0;P<c;P++){m.push(new Array);for(let b=0;b<c;b++)m[P].push(new be)}const M=new Array;for(let P=0;P<c;P++)M.push(0);for(let P=0;P<Ce;P++){for(let C=0;C<c;C++){for(let T=C+1;T<c;T++){const R=i.distance(u[C],u[T]);m[T][C].distance=R,m[T][C].index=C,m[C][T].distance=R,m[C][T].index=T}m[C].sort();for(let T=0;T<c;T++)p[C][T]=m[C][T].index}let b=0;for(let C=0;C<h;C++){const T=s[C],R=d[C],D=u[R],N=i.distance(T,D);let q=N,U=-1;for(let H=0;H<c;H++){if(m[R][H].distance>=4*N)continue;const rt=i.distance(T,u[H]);rt<q&&(q=rt,U=H)}U!==-1&&Math.abs(Math.sqrt(q)-Math.sqrt(N))>Me&&(b++,d[C]=U)}if(b===0&&P!==0)break;const x=new Array(c).fill(0),w=new Array(c).fill(0),B=new Array(c).fill(0);for(let C=0;C<c;C++)M[C]=0;for(let C=0;C<h;C++){const T=d[C],R=s[C],D=f[C];M[T]+=D,x[T]+=R[0]*D,w[T]+=R[1]*D,B[T]+=R[2]*D}for(let C=0;C<c;C++){const T=M[C];if(T===0){u[C]=[0,0,0];continue}const R=x[C]/T,D=w[C]/T,N=B[C]/T;u[C]=[R,D,N]}}const k=new Map;for(let P=0;P<c;P++){const b=M[P];if(b===0)continue;const x=i.toInt(u[P]);k.has(x)||k.set(x,b)}return k}}class be{constructor(){this.distance=-1,this.index=-1}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{static quantize(t){const n=new Map;for(let r=0;r<t.length;r++){const o=t[r];It(o)<255||n.set(o,(n.get(o)??0)+1)}return n}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=5,v=33,ut=35937,z={RED:"red",GREEN:"green",BLUE:"blue"};class te{constructor(t=[],n=[],r=[],o=[],s=[],a=[]){this.weights=t,this.momentsR=n,this.momentsG=r,this.momentsB=o,this.moments=s,this.cubes=a}quantize(t,n){this.constructHistogram(t),this.computeMoments();const r=this.createBoxes(n);return this.createResult(r.resultCount)}constructHistogram(t){this.weights=Array.from({length:ut}).fill(0),this.momentsR=Array.from({length:ut}).fill(0),this.momentsG=Array.from({length:ut}).fill(0),this.momentsB=Array.from({length:ut}).fill(0),this.moments=Array.from({length:ut}).fill(0);const n=_t.quantize(t);for(const[r,o]of n.entries()){const s=st(r),a=it(r),i=ct(r),h=8-Ct,f=(s>>h)+1,c=(a>>h)+1,u=(i>>h)+1,y=this.getIndex(f,c,u);this.weights[y]=(this.weights[y]??0)+o,this.momentsR[y]+=o*s,this.momentsG[y]+=o*a,this.momentsB[y]+=o*i,this.moments[y]+=o*(s*s+a*a+i*i)}}computeMoments(){for(let t=1;t<v;t++){const n=Array.from({length:v}).fill(0),r=Array.from({length:v}).fill(0),o=Array.from({length:v}).fill(0),s=Array.from({length:v}).fill(0),a=Array.from({length:v}).fill(0);for(let i=1;i<v;i++){let h=0,f=0,c=0,u=0,y=0;for(let d=1;d<v;d++){const p=this.getIndex(t,i,d);h+=this.weights[p],f+=this.momentsR[p],c+=this.momentsG[p],u+=this.momentsB[p],y+=this.moments[p],n[d]+=h,r[d]+=f,o[d]+=c,s[d]+=u,a[d]+=y;const m=this.getIndex(t-1,i,d);this.weights[p]=this.weights[m]+n[d],this.momentsR[p]=this.momentsR[m]+r[d],this.momentsG[p]=this.momentsG[m]+o[d],this.momentsB[p]=this.momentsB[m]+s[d],this.moments[p]=this.moments[m]+a[d]}}}}createBoxes(t){this.cubes=Array.from({length:t}).fill(0).map(()=>new ke);const n=Array.from({length:t}).fill(0);this.cubes[0].r0=0,this.cubes[0].g0=0,this.cubes[0].b0=0,this.cubes[0].r1=v-1,this.cubes[0].g1=v-1,this.cubes[0].b1=v-1;let r=t,o=0;for(let s=1;s<t;s++){this.cut(this.cubes[o],this.cubes[s])?(n[o]=this.cubes[o].vol>1?this.variance(this.cubes[o]):0,n[s]=this.cubes[s].vol>1?this.variance(this.cubes[s]):0):(n[o]=0,s--),o=0;let a=n[0];for(let i=1;i<=s;i++)n[i]>a&&(a=n[i],o=i);if(a<=0){r=s+1;break}}return new Ae(t,r)}createResult(t){const n=[];for(let r=0;r<t;++r){const o=this.cubes[r],s=this.volume(o,this.weights);if(s>0){const a=Math.round(this.volume(o,this.momentsR)/s),i=Math.round(this.volume(o,this.momentsG)/s),h=Math.round(this.volume(o,this.momentsB)/s),f=255<<24|(a&255)<<16|(i&255)<<8|h&255;n.push(f)}}return n}variance(t){const n=this.volume(t,this.momentsR),r=this.volume(t,this.momentsG),o=this.volume(t,this.momentsB),s=this.moments[this.getIndex(t.r1,t.g1,t.b1)]-this.moments[this.getIndex(t.r1,t.g1,t.b0)]-this.moments[this.getIndex(t.r1,t.g0,t.b1)]+this.moments[this.getIndex(t.r1,t.g0,t.b0)]-this.moments[this.getIndex(t.r0,t.g1,t.b1)]+this.moments[this.getIndex(t.r0,t.g1,t.b0)]+this.moments[this.getIndex(t.r0,t.g0,t.b1)]-this.moments[this.getIndex(t.r0,t.g0,t.b0)],a=n*n+r*r+o*o,i=this.volume(t,this.weights);return s-a/i}cut(t,n){const r=this.volume(t,this.momentsR),o=this.volume(t,this.momentsG),s=this.volume(t,this.momentsB),a=this.volume(t,this.weights),i=this.maximize(t,z.RED,t.r0+1,t.r1,r,o,s,a),h=this.maximize(t,z.GREEN,t.g0+1,t.g1,r,o,s,a),f=this.maximize(t,z.BLUE,t.b0+1,t.b1,r,o,s,a);let c;const u=i.maximum,y=h.maximum,d=f.maximum;if(u>=y&&u>=d){if(i.cutLocation<0)return!1;c=z.RED}else y>=u&&y>=d?c=z.GREEN:c=z.BLUE;switch(n.r1=t.r1,n.g1=t.g1,n.b1=t.b1,c){case z.RED:t.r1=i.cutLocation,n.r0=t.r1,n.g0=t.g0,n.b0=t.b0;break;case z.GREEN:t.g1=h.cutLocation,n.r0=t.r0,n.g0=t.g1,n.b0=t.b0;break;case z.BLUE:t.b1=f.cutLocation,n.r0=t.r0,n.g0=t.g0,n.b0=t.b1;break;default:throw new Error("unexpected direction "+c)}return t.vol=(t.r1-t.r0)*(t.g1-t.g0)*(t.b1-t.b0),n.vol=(n.r1-n.r0)*(n.g1-n.g0)*(n.b1-n.b0),!0}maximize(t,n,r,o,s,a,i,h){const f=this.bottom(t,n,this.momentsR),c=this.bottom(t,n,this.momentsG),u=this.bottom(t,n,this.momentsB),y=this.bottom(t,n,this.weights);let d=0,p=-1,m=0,M=0,k=0,P=0;for(let b=r;b<o;b++){if(m=f+this.top(t,n,b,this.momentsR),M=c+this.top(t,n,b,this.momentsG),k=u+this.top(t,n,b,this.momentsB),P=y+this.top(t,n,b,this.weights),P===0)continue;let x=(m*m+M*M+k*k)*1,w=P*1,B=x/w;m=s-m,M=a-M,k=i-k,P=h-P,P!==0&&(x=(m*m+M*M+k*k)*1,w=P*1,B+=x/w,B>d&&(d=B,p=b))}return new Ie(p,d)}volume(t,n){return n[this.getIndex(t.r1,t.g1,t.b1)]-n[this.getIndex(t.r1,t.g1,t.b0)]-n[this.getIndex(t.r1,t.g0,t.b1)]+n[this.getIndex(t.r1,t.g0,t.b0)]-n[this.getIndex(t.r0,t.g1,t.b1)]+n[this.getIndex(t.r0,t.g1,t.b0)]+n[this.getIndex(t.r0,t.g0,t.b1)]-n[this.getIndex(t.r0,t.g0,t.b0)]}bottom(t,n,r){switch(n){case z.RED:return-r[this.getIndex(t.r0,t.g1,t.b1)]+r[this.getIndex(t.r0,t.g1,t.b0)]+r[this.getIndex(t.r0,t.g0,t.b1)]-r[this.getIndex(t.r0,t.g0,t.b0)];case z.GREEN:return-r[this.getIndex(t.r1,t.g0,t.b1)]+r[this.getIndex(t.r1,t.g0,t.b0)]+r[this.getIndex(t.r0,t.g0,t.b1)]-r[this.getIndex(t.r0,t.g0,t.b0)];case z.BLUE:return-r[this.getIndex(t.r1,t.g1,t.b0)]+r[this.getIndex(t.r1,t.g0,t.b0)]+r[this.getIndex(t.r0,t.g1,t.b0)]-r[this.getIndex(t.r0,t.g0,t.b0)];default:throw new Error("unexpected direction $direction")}}top(t,n,r,o){switch(n){case z.RED:return o[this.getIndex(r,t.g1,t.b1)]-o[this.getIndex(r,t.g1,t.b0)]-o[this.getIndex(r,t.g0,t.b1)]+o[this.getIndex(r,t.g0,t.b0)];case z.GREEN:return o[this.getIndex(t.r1,r,t.b1)]-o[this.getIndex(t.r1,r,t.b0)]-o[this.getIndex(t.r0,r,t.b1)]+o[this.getIndex(t.r0,r,t.b0)];case z.BLUE:return o[this.getIndex(t.r1,t.g1,r)]-o[this.getIndex(t.r1,t.g0,r)]-o[this.getIndex(t.r0,t.g1,r)]+o[this.getIndex(t.r0,t.g0,r)];default:throw new Error("unexpected direction $direction")}}getIndex(t,n,r){return(t<<Ct*2)+(t<<Ct+1)+t+(n<<Ct)+n+r}}class ke{constructor(t=0,n=0,r=0,o=0,s=0,a=0,i=0){this.r0=t,this.r1=n,this.g0=r,this.g1=o,this.b0=s,this.b1=a,this.vol=i}}class Ae{constructor(t,n){this.requestedCount=t,this.resultCount=n}}class Ie{constructor(t,n){this.cutLocation=t,this.maximum=n}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{static quantize(t,n){const o=new te().quantize(t,n);return Kt.quantize(t,o,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.sourceColorArgb=t.sourceColorArgb,this.variant=t.variant,this.contrastLevel=t.contrastLevel,this.isDark=t.isDark,this.sourceColorHct=S.fromInt(t.sourceColorArgb),this.primaryPalette=t.primaryPalette,this.secondaryPalette=t.secondaryPalette,this.tertiaryPalette=t.tertiaryPalette,this.neutralPalette=t.neutralPalette,this.neutralVariantPalette=t.neutralVariantPalette,this.errorPalette=I.fromHueAndChroma(25,84)}static getRotatedHue(t,n,r){const o=t.hue;if(n.length!==r.length)throw new Error(`mismatch between hue length ${n.length} & rotations ${r.length}`);if(r.length===1)return W(t.hue+r[0]);const s=n.length;for(let a=0;a<=s-2;a++){const i=n[a],h=n[a+1];if(i<o&&o<h)return W(o+r[a])}return o}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get outlineVariant(){return this.props.outlineVariant}get shadow(){return this.props.shadow}get scrim(){return this.props.scrim}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(t){return J.lightFromCorePalette(F.of(t))}static dark(t){return J.darkFromCorePalette(F.of(t))}static lightContent(t){return J.lightFromCorePalette(F.contentOf(t))}static darkContent(t){return J.darkFromCorePalette(F.contentOf(t))}static lightFromCorePalette(t){return new J({primary:t.a1.tone(40),onPrimary:t.a1.tone(100),primaryContainer:t.a1.tone(90),onPrimaryContainer:t.a1.tone(10),secondary:t.a2.tone(40),onSecondary:t.a2.tone(100),secondaryContainer:t.a2.tone(90),onSecondaryContainer:t.a2.tone(10),tertiary:t.a3.tone(40),onTertiary:t.a3.tone(100),tertiaryContainer:t.a3.tone(90),onTertiaryContainer:t.a3.tone(10),error:t.error.tone(40),onError:t.error.tone(100),errorContainer:t.error.tone(90),onErrorContainer:t.error.tone(10),background:t.n1.tone(99),onBackground:t.n1.tone(10),surface:t.n1.tone(99),onSurface:t.n1.tone(10),surfaceVariant:t.n2.tone(90),onSurfaceVariant:t.n2.tone(30),outline:t.n2.tone(50),outlineVariant:t.n2.tone(80),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(20),inverseOnSurface:t.n1.tone(95),inversePrimary:t.a1.tone(80)})}static darkFromCorePalette(t){return new J({primary:t.a1.tone(80),onPrimary:t.a1.tone(20),primaryContainer:t.a1.tone(30),onPrimaryContainer:t.a1.tone(90),secondary:t.a2.tone(80),onSecondary:t.a2.tone(20),secondaryContainer:t.a2.tone(30),onSecondaryContainer:t.a2.tone(90),tertiary:t.a3.tone(80),onTertiary:t.a3.tone(20),tertiaryContainer:t.a3.tone(30),onTertiaryContainer:t.a3.tone(90),error:t.error.tone(80),onError:t.error.tone(20),errorContainer:t.error.tone(30),onErrorContainer:t.error.tone(80),background:t.n1.tone(10),onBackground:t.n1.tone(90),surface:t.n1.tone(10),onSurface:t.n1.tone(90),surfaceVariant:t.n2.tone(30),onSurfaceVariant:t.n2.tone(80),outline:t.n2.tone(60),outlineVariant:t.n2.tone(30),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(90),inverseOnSurface:t.n1.tone(20),inversePrimary:t.a1.tone(40)})}constructor(t){this.props=t}toJSON(){return{...this.props}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{get colorAccentPrimary(){return this.props.colorAccentPrimary}get colorAccentPrimaryVariant(){return this.props.colorAccentPrimaryVariant}get colorAccentSecondary(){return this.props.colorAccentSecondary}get colorAccentSecondaryVariant(){return this.props.colorAccentSecondaryVariant}get colorAccentTertiary(){return this.props.colorAccentTertiary}get colorAccentTertiaryVariant(){return this.props.colorAccentTertiaryVariant}get textColorPrimary(){return this.props.textColorPrimary}get textColorSecondary(){return this.props.textColorSecondary}get textColorTertiary(){return this.props.textColorTertiary}get textColorPrimaryInverse(){return this.props.textColorPrimaryInverse}get textColorSecondaryInverse(){return this.props.textColorSecondaryInverse}get textColorTertiaryInverse(){return this.props.textColorTertiaryInverse}get colorBackground(){return this.props.colorBackground}get colorBackgroundFloating(){return this.props.colorBackgroundFloating}get colorSurface(){return this.props.colorSurface}get colorSurfaceVariant(){return this.props.colorSurfaceVariant}get colorSurfaceHighlight(){return this.props.colorSurfaceHighlight}get surfaceHeader(){return this.props.surfaceHeader}get underSurface(){return this.props.underSurface}get offState(){return this.props.offState}get accentSurface(){return this.props.accentSurface}get textPrimaryOnAccent(){return this.props.textPrimaryOnAccent}get textSecondaryOnAccent(){return this.props.textSecondaryOnAccent}get volumeBackground(){return this.props.volumeBackground}get scrim(){return this.props.scrim}static light(t){const n=F.of(t);return et.lightFromCorePalette(n)}static dark(t){const n=F.of(t);return et.darkFromCorePalette(n)}static lightContent(t){const n=F.contentOf(t);return et.lightFromCorePalette(n)}static darkContent(t){const n=F.contentOf(t);return et.darkFromCorePalette(n)}static lightFromCorePalette(t){return new et({colorAccentPrimary:t.a1.tone(90),colorAccentPrimaryVariant:t.a1.tone(40),colorAccentSecondary:t.a2.tone(90),colorAccentSecondaryVariant:t.a2.tone(40),colorAccentTertiary:t.a3.tone(90),colorAccentTertiaryVariant:t.a3.tone(40),textColorPrimary:t.n1.tone(10),textColorSecondary:t.n2.tone(30),textColorTertiary:t.n2.tone(50),textColorPrimaryInverse:t.n1.tone(95),textColorSecondaryInverse:t.n1.tone(80),textColorTertiaryInverse:t.n1.tone(60),colorBackground:t.n1.tone(95),colorBackgroundFloating:t.n1.tone(98),colorSurface:t.n1.tone(98),colorSurfaceVariant:t.n1.tone(90),colorSurfaceHighlight:t.n1.tone(100),surfaceHeader:t.n1.tone(90),underSurface:t.n1.tone(0),offState:t.n1.tone(20),accentSurface:t.a2.tone(95),textPrimaryOnAccent:t.n1.tone(10),textSecondaryOnAccent:t.n2.tone(30),volumeBackground:t.n1.tone(25),scrim:t.n1.tone(80)})}static darkFromCorePalette(t){return new et({colorAccentPrimary:t.a1.tone(90),colorAccentPrimaryVariant:t.a1.tone(70),colorAccentSecondary:t.a2.tone(90),colorAccentSecondaryVariant:t.a2.tone(70),colorAccentTertiary:t.a3.tone(90),colorAccentTertiaryVariant:t.a3.tone(70),textColorPrimary:t.n1.tone(95),textColorSecondary:t.n2.tone(80),textColorTertiary:t.n2.tone(60),textColorPrimaryInverse:t.n1.tone(10),textColorSecondaryInverse:t.n1.tone(30),textColorTertiaryInverse:t.n1.tone(50),colorBackground:t.n1.tone(10),colorBackgroundFloating:t.n1.tone(10),colorSurface:t.n1.tone(20),colorSurfaceVariant:t.n1.tone(30),colorSurfaceHighlight:t.n1.tone(35),surfaceHeader:t.n1.tone(30),underSurface:t.n1.tone(0),offState:t.n1.tone(20),accentSurface:t.a2.tone(95),textPrimaryOnAccent:t.n1.tone(10),textSecondaryOnAccent:t.n2.tone(30),volumeBackground:t.n1.tone(25),scrim:t.n1.tone(80)})}constructor(t){this.props=t}toJSON(){return{...this.props}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.input=t,this.hctsByTempCache=[],this.hctsByHueCache=[],this.tempsByHctCache=new Map,this.inputRelativeTemperatureCache=-1,this.complementCache=null}get hctsByTemp(){if(this.hctsByTempCache.length>0)return this.hctsByTempCache;const t=this.hctsByHue.concat([this.input]),n=this.tempsByHct;return t.sort((r,o)=>n.get(r)-n.get(o)),this.hctsByTempCache=t,t}get warmest(){return this.hctsByTemp[this.hctsByTemp.length-1]}get coldest(){return this.hctsByTemp[0]}analogous(t=5,n=12){const r=Math.round(this.input.hue),o=this.hctsByHue[r];let s=this.relativeTemperature(o);const a=[o];let i=0;for(let p=0;p<360;p++){const m=bt(r+p),M=this.hctsByHue[m],k=this.relativeTemperature(M),P=Math.abs(k-s);s=k,i+=P}let h=1;const f=i/n;let c=0;for(s=this.relativeTemperature(o);a.length<n;){const p=bt(r+h),m=this.hctsByHue[p],M=this.relativeTemperature(m),k=Math.abs(M-s);c+=k;const P=a.length*f;let b=c>=P,x=1;for(;b&&a.length<n;){a.push(m);const w=(a.length+x)*f;b=c>=w,x++}if(s=M,h++,h>360){for(;a.length<n;)a.push(m);break}}const u=[this.input],y=Math.floor((t-1)/2);for(let p=1;p<y+1;p++){let m=0-p;for(;m<0;)m=a.length+m;m>=a.length&&(m=m%a.length),u.splice(0,0,a[m])}const d=t-y-1;for(let p=1;p<d+1;p++){let m=p;for(;m<0;)m=a.length+m;m>=a.length&&(m=m%a.length),u.push(a[m])}return u}get complement(){if(this.complementCache!=null)return this.complementCache;const t=this.coldest.hue,n=this.tempsByHct.get(this.coldest),r=this.warmest.hue,s=this.tempsByHct.get(this.warmest)-n,a=ot.isBetween(this.input.hue,t,r),i=a?r:t,h=a?t:r,f=1;let c=1e3,u=this.hctsByHue[Math.round(this.input.hue)];const y=1-this.inputRelativeTemperature;for(let d=0;d<=360;d+=1){const p=W(i+f*d);if(!ot.isBetween(p,i,h))continue;const m=this.hctsByHue[Math.round(p)],M=(this.tempsByHct.get(m)-n)/s,k=Math.abs(y-M);k<c&&(c=k,u=m)}return this.complementCache=u,this.complementCache}relativeTemperature(t){const n=this.tempsByHct.get(this.warmest)-this.tempsByHct.get(this.coldest),r=this.tempsByHct.get(t)-this.tempsByHct.get(this.coldest);return n===0?.5:r/n}get inputRelativeTemperature(){return this.inputRelativeTemperatureCache>=0?this.inputRelativeTemperatureCache:(this.inputRelativeTemperatureCache=this.relativeTemperature(this.input),this.inputRelativeTemperatureCache)}get tempsByHct(){if(this.tempsByHctCache.size>0)return this.tempsByHctCache;const t=this.hctsByHue.concat([this.input]),n=new Map;for(const r of t)n.set(r,ot.rawTemperature(r));return this.tempsByHctCache=n,n}get hctsByHue(){if(this.hctsByHueCache.length>0)return this.hctsByHueCache;const t=[];for(let n=0;n<=360;n+=1){const r=S.from(n,this.input.chroma,this.input.tone);t.push(r)}return this.hctsByHueCache=t,this.hctsByHueCache}static isBetween(t,n,r){return n<r?n<=t&&t<=r:n<=t||t<=r}static rawTemperature(t){const n=Nt(t.toInt()),r=W(Math.atan2(n[2],n[1])*180/Math.PI),o=Math.sqrt(n[1]*n[1]+n[2]*n[2]);return-.5+.02*Math.pow(o,1.07)*Math.cos(W(r-50)*Math.PI/180)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends ${constructor(t,n,r){super({sourceColorArgb:t.toInt(),variant:Y.CONTENT,contrastLevel:r,isDark:n,primaryPalette:I.fromHueAndChroma(t.hue,t.chroma),secondaryPalette:I.fromHueAndChroma(t.hue,Math.max(t.chroma-32,t.chroma*.5)),tertiaryPalette:I.fromInt(ht.fixIfDisliked(new ot(t).analogous(3,6)[2]).toInt()),neutralPalette:I.fromHueAndChroma(t.hue,t.chroma/8),neutralVariantPalette:I.fromHueAndChroma(t.hue,t.chroma/8+4)})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K extends ${constructor(t,n,r){super({sourceColorArgb:t.toInt(),variant:Y.EXPRESSIVE,contrastLevel:r,isDark:n,primaryPalette:I.fromHueAndChroma(W(t.hue+120),40),secondaryPalette:I.fromHueAndChroma($.getRotatedHue(t,K.hues,K.secondaryRotations),24),tertiaryPalette:I.fromHueAndChroma($.getRotatedHue(t,K.hues,K.tertiaryRotations),32),neutralPalette:I.fromHueAndChroma(t.hue,8),neutralVariantPalette:I.fromHueAndChroma(t.hue,12)})}}K.hues=[0,21,51,121,151,191,271,321,360];K.secondaryRotations=[45,95,45,20,45,90,45,45,45];K.tertiaryRotations=[120,120,20,45,20,15,20,120,120];/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends ${constructor(t,n,r){super({sourceColorArgb:t.toInt(),variant:Y.FIDELITY,contrastLevel:r,isDark:n,primaryPalette:I.fromHueAndChroma(t.hue,t.chroma),secondaryPalette:I.fromHueAndChroma(t.hue,Math.max(t.chroma-32,t.chroma*.5)),tertiaryPalette:I.fromInt(ht.fixIfDisliked(new ot(t).complement).toInt()),neutralPalette:I.fromHueAndChroma(t.hue,t.chroma/8),neutralVariantPalette:I.fromHueAndChroma(t.hue,t.chroma/8+4)})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends ${constructor(t,n,r){super({sourceColorArgb:t.toInt(),variant:Y.MONOCHROME,contrastLevel:r,isDark:n,primaryPalette:I.fromHueAndChroma(t.hue,0),secondaryPalette:I.fromHueAndChroma(t.hue,0),tertiaryPalette:I.fromHueAndChroma(t.hue,0),neutralPalette:I.fromHueAndChroma(t.hue,0),neutralVariantPalette:I.fromHueAndChroma(t.hue,0)})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends ${constructor(t,n,r){super({sourceColorArgb:t.toInt(),variant:Y.NEUTRAL,contrastLevel:r,isDark:n,primaryPalette:I.fromHueAndChroma(t.hue,12),secondaryPalette:I.fromHueAndChroma(t.hue,8),tertiaryPalette:I.fromHueAndChroma(t.hue,16),neutralPalette:I.fromHueAndChroma(t.hue,2),neutralVariantPalette:I.fromHueAndChroma(t.hue,2)})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends ${constructor(t,n,r){super({sourceColorArgb:t.toInt(),variant:Y.TONAL_SPOT,contrastLevel:r,isDark:n,primaryPalette:I.fromHueAndChroma(t.hue,40),secondaryPalette:I.fromHueAndChroma(t.hue,16),tertiaryPalette:I.fromHueAndChroma(W(t.hue+60),24),neutralPalette:I.fromHueAndChroma(t.hue,6),neutralVariantPalette:I.fromHueAndChroma(t.hue,8)})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _ extends ${constructor(t,n,r){super({sourceColorArgb:t.toInt(),variant:Y.VIBRANT,contrastLevel:r,isDark:n,primaryPalette:I.fromHueAndChroma(t.hue,200),secondaryPalette:I.fromHueAndChroma($.getRotatedHue(t,_.hues,_.secondaryRotations),24),tertiaryPalette:I.fromHueAndChroma($.getRotatedHue(t,_.hues,_.tertiaryRotations),32),neutralPalette:I.fromHueAndChroma(t.hue,8),neutralVariantPalette:I.fromHueAndChroma(t.hue,12)})}}_.hues=[0,41,61,101,131,181,251,301,360];_.secondaryRotations=[18,15,10,12,15,18,15,12,12];_.tertiaryRotations=[35,30,20,25,30,35,30,25,25];/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){}static score(t,n=!1){let r=0;for(const d of t.values())r+=d;const o=new Map,s=new Map,a=new Array(360).fill(0);for(const[d,p]of t.entries()){const m=p/r;o.set(d,m);const M=L.fromInt(d);s.set(d,M);const k=Math.round(M.hue);a[k]+=m}const i=new Map;for(const[d,p]of s.entries()){const m=Math.round(p.hue);let M=0;for(let k=m-15;k<m+15;k++){const P=bt(k);M+=a[P]}i.set(d,M)}const h=new Map;for(const[d,p]of s.entries()){const M=i.get(d)*100*E.WEIGHT_PROPORTION,k=p.chroma<E.TARGET_CHROMA?E.WEIGHT_CHROMA_BELOW:E.WEIGHT_CHROMA_ABOVE,P=(p.chroma-E.TARGET_CHROMA)*k,b=M+P;h.set(d,b)}const f=n?E.filterContent(s):E.filter(i,s),c=new Map;for(const d of f){let p=!1;const m=s.get(d).hue;for(const[M]of c){const k=s.get(M).hue;if(Lt(m,k)<15){p=!0;break}}p||c.set(d,h.get(d))}const u=Array.from(c.entries());u.sort((d,p)=>p[1]-d[1]);const y=u.map(d=>d[0]);return y.length===0&&y.push(4282549748),y}static filter(t,n){const r=new Array;for(const[o,s]of n.entries()){const a=t.get(o);s.chroma>=E.CUTOFF_CHROMA&&mt(o)>=E.CUTOFF_TONE&&a>=E.CUTOFF_EXCITED_PROPORTION&&r.push(o)}return r}static filterContent(t){return Array.from(t.keys())}}E.TARGET_CHROMA=48;E.WEIGHT_PROPORTION=.7;E.WEIGHT_CHROMA_ABOVE=.3;E.WEIGHT_CHROMA_BELOW=.1;E.CUTOFF_CHROMA=15;E.CUTOFF_TONE=10;E.CUTOFF_EXCITED_PROPORTION=.01;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(e){const t=st(e),n=it(e),r=ct(e),o=[t.toString(16),n.toString(16),r.toString(16)];for(const[s,a]of o.entries())a.length===1&&(o[s]="0"+a);return"#"+o.join("")}function Be(e){e=e.replace("#","");const t=e.length===3,n=e.length===6,r=e.length===8;if(!t&&!n&&!r)throw new Error("unexpected hex "+e);let o=0,s=0,a=0;return t?(o=Q(e.slice(0,1).repeat(2)),s=Q(e.slice(1,2).repeat(2)),a=Q(e.slice(2,3).repeat(2))):n?(o=Q(e.slice(0,2)),s=Q(e.slice(2,4)),a=Q(e.slice(4,6))):r&&(o=Q(e.slice(2,4)),s=Q(e.slice(4,6)),a=Q(e.slice(6,8))),(255<<24|(o&255)<<16|(s&255)<<8|a&255)>>>0}function Q(e){return parseInt(e,16)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e){const t=await new Promise((a,i)=>{const h=document.createElement("canvas"),f=h.getContext("2d");if(!f){i(new Error("Could not get canvas context"));return}const c=()=>{h.width=e.width,h.height=e.height,f.drawImage(e,0,0);let u=[0,0,e.width,e.height];const y=e.dataset.area;y&&/^\d+(\s*,\s*\d+){3}$/.test(y)&&(u=y.split(/\s*,\s*/).map(k=>parseInt(k,10)));const[d,p,m,M]=u;a(f.getImageData(d,p,m,M).data)};e.complete?c():e.onload=c}),n=[];for(let a=0;a<t.length;a+=4){const i=t[a],h=t[a+1],f=t[a+2];if(t[a+3]<255)continue;const u=dt(i,h,f);n.push(u)}const r=ee.quantize(n,128);return E.score(r)[0]}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e,t=[]){const n=F.of(e);return{source:e,schemes:{light:J.light(e),dark:J.dark(e)},palettes:{primary:n.a1,secondary:n.a2,tertiary:n.a3,neutral:n.n1,neutralVariant:n.n2,error:n.error},customColors:t.map(r=>oe(e,r))}}async function Fe(e,t=[]){const n=await ne(e);return re(n,t)}function oe(e,t){let n=t.value;const r=n,o=e;t.blend&&(n=Tt.harmonize(r,o));const a=F.of(n).a1;return{color:t,value:n,light:{color:a.tone(40),onColor:a.tone(100),colorContainer:a.tone(90),onColorContainer:a.tone(10)},dark:{color:a.tone(80),onColor:a.tone(20),colorContainer:a.tone(30),onColorContainer:a.tone(90)}}}function Se(e,t){const n=(t==null?void 0:t.target)||document.body,o=(t==null?void 0:t.dark)??!1?e.schemes.dark:e.schemes.light;if(Ft(n,o),t!=null&&t.brightnessSuffix&&(Ft(n,e.schemes.dark,"-dark"),Ft(n,e.schemes.light,"-light")),t!=null&&t.paletteTones){const s=(t==null?void 0:t.paletteTones)??[];for(const[a,i]of Object.entries(e.palettes)){const h=a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();for(const f of s){const c=`--md-ref-palette-${h}-${h}${f}`,u=Gt(i.tone(f));n.style.setProperty(c,u)}}}}function Ft(e,t,n=""){for(const[r,o]of Object.entries(t.toJSON())){const s=r.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=Gt(o);e.style.setProperty(`--md-sys-color-${s}${n}`,a)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=Object.freeze(Object.defineProperty({__proto__:null,Blend:Tt,Cam16:L,Contrast:V,CorePalette:F,DislikeAnalyzer:ht,DynamicColor:g,DynamicScheme:$,Hct:S,MaterialDynamicColors:l,QuantizerCelebi:ee,QuantizerMap:_t,QuantizerWsmeans:Kt,QuantizerWu:te,Scheme:J,SchemeAndroid:et,SchemeContent:Te,SchemeExpressive:K,SchemeFidelity:xe,SchemeMonochrome:De,SchemeNeutral:Re,SchemeTonalSpot:we,SchemeVibrant:_,Score:E,TemperatureCache:ot,TonalPalette:I,ViewingConditions:j,alphaFromArgb:It,applyTheme:Se,argbFromHex:Be,argbFromLab:Xt,argbFromLinrgb:Et,argbFromLstar:Qt,argbFromRgb:dt,argbFromRgba:pe,argbFromXyz:Vt,blueFromArgb:ct,clampDouble:at,clampInt:Yt,customColor:oe,delinearized:nt,differenceDegrees:Lt,greenFromArgb:it,hexFromArgb:Gt,isOpaque:me,labFromArgb:Nt,lerp:Ot,linearized:X,lstarFromArgb:mt,lstarFromY:At,matrixMultiply:kt,redFromArgb:st,rgbaFromArgb:de,rotationDirection:vt,sanitizeDegreesDouble:W,sanitizeDegreesInt:bt,signum:G,sourceColorFromImage:ne,themeFromImage:Fe,themeFromSourceColor:re,whitePointD65:Zt,xyzFromArgb:Jt,yFromLstar:Z},Symbol.toStringTag,{value:"Module"})),Ee=Oe;function Le(e={},t={},n=null){let r=".dark {",o=":root {",s=".light {";for(const[i,h]of Object.entries(e))o+=`--md-sys-color-${i}:#`+(parseInt(h)&16777215).toString(16).padStart(6,"0")+`;
`,s+=`--md-sys-color-${i}:#`+(parseInt(h)&16777215).toString(16).padStart(6,"0")+`;
`;o+="}";for(const[i,h]of Object.entries(t))r+=`--md-sys-color-${i}:#`+(parseInt(h)&16777215).toString(16).padStart(6,"0")+`;
`;r+="}";const a=document.createElement("style");a.innerHTML=o+`
`+r+`
`+s,document.head.appendChild(a)}function He(e){const t=F.contentOf(e);return{primary:t.a1.tone(40),onPrimary:t.a1.tone(100),primaryContainer:t.a1.tone(90),onPrimaryContainer:t.a1.tone(10),secondary:t.a2.tone(40),onSecondary:t.a2.tone(100),secondaryContainer:t.a2.tone(90),onSecondaryContainer:t.a2.tone(10),tertiary:t.a3.tone(40),onTertiary:t.a3.tone(100),tertiaryContainer:t.a3.tone(90),onTertiaryContainer:t.a3.tone(10),error:t.error.tone(40),onError:t.error.tone(100),errorContainer:t.error.tone(90),onErrorContainer:t.error.tone(10),background:t.n1.tone(99),onBackground:t.n1.tone(10),surface:t.n1.tone(99),onSurface:t.n1.tone(10),surfaceVariant:t.n2.tone(90),onSurfaceVariant:t.n2.tone(30),outline:t.n2.tone(50),outlineVariant:t.n2.tone(80),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(20),inverseOnSurface:t.n1.tone(95),inversePrimary:t.a1.tone(80),surfaceDim:t.n1.tone(87),surfaceBright:t.n1.tone(98),surfaceContainerLowest:t.n1.tone(100),surfaceContainerLow:t.n1.tone(96),surfaceContainer:t.n1.tone(94),surfaceContainerHigh:t.n1.tone(92),surfaceContainerHighest:t.n1.tone(90)}}function Ve(e){const t=F.contentOf(e);return{primary:t.a1.tone(80),onPrimary:t.a1.tone(20),primaryContainer:t.a1.tone(30),onPrimaryContainer:t.a1.tone(90),secondary:t.a2.tone(80),onSecondary:t.a2.tone(20),secondaryContainer:t.a2.tone(30),onSecondaryContainer:t.a2.tone(90),tertiary:t.a3.tone(80),onTertiary:t.a3.tone(20),tertiaryContainer:t.a3.tone(30),onTertiaryContainer:t.a3.tone(90),error:t.error.tone(80),onError:t.error.tone(20),errorContainer:t.error.tone(30),onErrorContainer:t.error.tone(80),background:t.n1.tone(10),onBackground:t.n1.tone(90),surface:t.n1.tone(10),onSurface:t.n1.tone(90),surfaceVariant:t.n2.tone(30),onSurfaceVariant:t.n2.tone(80),outline:t.n2.tone(60),outlineVariant:t.n2.tone(30),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(90),inverseOnSurface:t.n1.tone(20),inversePrimary:t.a1.tone(40),surfaceDim:t.n1.tone(6),surfaceBright:t.n1.tone(24),surfaceContainerLowest:t.n1.tone(4),surfaceContainerLow:t.n1.tone(10),surfaceContainer:t.n1.tone(12),surfaceContainerHigh:t.n1.tone(17),surfaceContainerHighest:t.n1.tone(22)}}const $t=Ee,St={applyTheme:Le,lightFromSource:He,darkFromSource:Ve},Ne={mounted(){St.applyTheme(St.lightFromSource($t.argbFromHex("#003CBD")),St.darkFromSource($t.argbFromHex("#003CBD")))}};function ze(e,t,n,r,o,s){return le(),ue("div")}const Ye=he(Ne,[["render",ze],["__file","load.vue"]]);export{Ye as default};
