//$4 javascript framework //
//--------------------------
//(C) Ignacio Ramos v.0.14.1
// indianayourself.com
// Copia lo que te haga falta pero sigueme en el twitter @irfaelo / @indianayourself
// Este framework te ahorrarÃ¡ mucho trabajo y no tiene MUCHAS funciones innecesarias para ESO que tu TANTO quieres hacer.


//ÂºÂºÂ·Â·..METACORE...
var  document=doc = window.document,
DE = document.documentElement; 

function $4(i){return document.getElementById(i)}
function $4s(i){return $4(i).style}

function $L(o){return o.length}

function isset(x){if (typeof obj.foo != 'undefined') {return true}}
function arrFn(fn,ea,va){for(i=0;i<$L(ea);i++){eval(fn+'('+str.str(ea[i])+','+str.str(va[i])+');');}}

iif=function(c,t,f){_cr.ifev(c,t,f);}
elif= function (ci,ce,T,F){if(eval(ci)){eval(T)}else if(ce){eval(F)}}
 
var _cr={};
_cr.U = ('undefined'|null|0|false);
_cr.F = (-1|false);
_cr.T = (1|true);

_cr.tf  = function (c) {if(eval(c)){return true}else{return false}}
_cr.ifrt= function (c,T,F){if(eval(c)){return T}else{return F}}
_cr.ifev= function (c,T,F){if(eval(c)){eval(T)}else{eval(F)}}
_cr.eifev= function (ci,ce,T,F){if(eval(ci)){eval(T)}else if(ce){eval(F)}}
_cr.tfcm= function (a,b,c) {return _cr.tf('"'+a+'"'+c+'"'+b+'"')}
_cr.tfeq= function (a,b) {return _cr.tf('"'+a+'"=="'+b+'"')}

_cr.sc  = function(s) {return '/*'+s+'*/';}
 





var str={};
str.expl = function (s,p){return s.split(p)}
str.comp = function (s,c){return _cr.tfeq(s,c)}
str.rem  = function (s,q){return s.replace(q,'');}
str.rex  = function (s,q,n){r= new RegExp(' '+q+' ',"g");return s.replace(r,n)}
str.ree  = function (s,q){return str.rex(s,q,' ')}
str.remcss  = function (s,q){return str.rex(s,q,'/*'+q+'*/')}
str.f = function(s,f){return(s.indexOf(f) > -1);}
str.str = function(s){if(typeof(s)=='string'){return "'"+s+"'";}else{return s}}



var lnk={};
lnk.gl   = function (i){return $4(i).href}
lnk.sl   = function (i,l){$4(i).href=l}
lnk.rl   = function (i,l){return lnk.sl(i,'')}
lnk.hash = function (i){return str.expl(lnk.href(i),'#')[1]}
lnk.qs   = function (s,q,r){ if(r){r=[1,0]}else{r=[0,1]}
    s=str.expl(s,'&');
    for(i=0;i<$L(s);i++){
        x=str.expl(s[i],'=');
        if(q==x[r[0]])
        {return x[r[1]]} 
    }
}
lnk.qsrv   = function(s,q){return lnk.qs(s,q,true)}
 
var url = {};
url.hash = function(){return str.f(location.toString(),'#')}

 




var dom={};
dom.gh = $gh = function (i){return $4(i).innerHTML}
dom.sh = $sh = function (i,h){$4(i).innerHTML=h}
dom.ah = $ah = function (i,h){$4(i).innerHTML=dom.gh(i)+h} 
dom.rh = $rh = function (i,h){$4(i).innerHTML=''}
dom.th = $th = function (i,h1,h2){if(dom.gh(i)==h1){dom.sh(i,h2)}else{dom.sh(i,h1)}}

dom.ga = function (i,a){return $4(i).getAttribute(a)}
dom.sa = function (i,a,v){$4(i).setAttribute(a,v);i.a=v}
dom.aa = function (i,a,v){dom.sa(i,a,dom.ga(i,a)+v)}
dom.ra = function (i,a,v){dom.sa(i,a,'')}
dom.ta = function (i,a,v1,v2){if(dom.ga(i,a)==v1){dom.sa(i,a,v2)}else{dom.sa(i,a,v1)}}

var frm={};
frm.v = function(i){return dom.ga(i,'value');}
frm.sv = function (i,v){dom.sa(i,'value',v);}
frm.av = function (i,v){frm.sv(i,frm.v(i)+v)}
frm.rv = function (i){frm.sv(i,'')}
frm.tv = function (i,v1,v2){if(frm.v(i)==v1){frm.sv(i,v2)}else{frm.sv(i,v1)}} 
 

var css={};
css._cr = function(c){return new RegExp("(^|\\s+)"+c+"(\\s+|$)");}
css.cl  = function(i){if('classList' in DE){return $4(i).classList}else{return css._cr(c).test(css.gc(i))}}

css.gc  = css.getClass 		= $gc = function(i){return $4(i).className;}
css.sc  = css.setClass 		= $sc = function(i,c){$4(i).className = c;}
css.rc  = css.removeClass	= $rc = function(i){css.sc(i,'');}
css.ac  = css.appendClass	= $ac = function(i,c){if(css.hc(i,c)==false)$4(i).className += (' '+c);}
css.hc  = css.hasClass		= $hc = function(i,c) {return css.cl(i).contains(c);}
css.dc  = css.deleteClass	= $dc = function(i,c){css.sc(i, css.gc(i).replace(css._cr( c ),' '));}
css.wc  = css.swapClass		= $wc = function(i,rc,ac){css.dc(i,rc);css.ac(i,ac);}
css.tc  = css.toggleClass	= $tc = function(i,c){if(css.hc(i,c)){css.dc(i,c)}else{css.ac(i,c)}}
css.lc = css.alternateClass	= $lc = function(i,c1,c2){css.tc(i,c1);css.tc(i,c2)}

css.gs = function(i) {return $4(i).getAttribute('style')}



css.ss = function(i,s) {$4(i).setAttribute('style',s)}
css.rs = function(i,s) {css.ss(i,'')}
css.as = function(i,s) {css.ss(i,css.s(i,s)+';'+s)}

css.et  = function(e){return $4(e).offsetTop;}
css.eb  = function(e){return $4(e).clientHeight;}


 
 


 

 

//WINDOW/VIEWPORT
var win = {};

win.g =function(d) {
        var client = DE['client'+d],
            inner = window['client'+d];
        if( client < inner )
            return inner;
        else
            return client;
    }
	
css.gp = function(e) {   return ($4(e).offsetLeft - $4(e).scrollLeft + $4(e).clientLeft);
}	

win.vph = win.g('Height');
win.vpw = win.g('Width');

win.is = function (o) {return o != null && o === o.window; }
win.g  = function (e) {return win.is(e) ? e : e.nodeType===9 && e.defaultView;}
win.t =  function(){return pageYOffset};
win._LS = 0;
win._SA = 0; 
win.ls =  function() {win._SA = w.t()}
win.dif = function(m){return eval("win._SA "+m+" win.t()");}
win.isin = function(i){return eval( " win.t()-10>"+css.et(i));}

 
function elmtop (s){return document.getElementById(s).offsetTop;}


win.gos = function( i ) {  return i.getBoundingClientRect();   }
