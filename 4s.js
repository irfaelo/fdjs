<!-- 
 
//$4 javascript framework //
//--------------------------
//(C) Ignacio Ramos v.0.14.1
// indianayourself.com
// Copia lo que te haga falta pero sigueme en el twitter @irfaelo / @indianayourself
// Este framework te ahorrarÃ¡ mucho trabajo y no tiene MUCHAS funciones innecesarias para ESO que tu TANTO quieres hacer.


//...METACORE...
var   document=doc = window.document,
$DE = document.documentElement; 
  

var _cr={};
_cr.U = 'undefined'; 
_cr.N = ('');
_cr.F = (-1|false);
_cr.T = (1|true);

//DOM ACCESS
function $4(i){return document.getElementById(i)} //= doc.getElmbyId...
function $4s(i){return $4(i).style} //= doc.getElmbyId(i).style...

function $$4(i){return document.querySelectorAll(i)} //= doc.qsall(i).style...

//select by tag/class [$id returns CURRENT ID in ARRAY]
function $select (t,fn)
{  q =t.slice(1).split('>')[0];
	if(str.f(t,'.')){ $TAG = document.getElementsByClassName(t.slice(1));}
	else if(str.f(t,'<')){ $TAG = document.getElementsByTagName(q);}
for(i=0;i<$L($TAG);i++)
{	//1st scope if has id name...
	$tn=($TAG[i].id);
	if($tn==''){$tn='IY__'+q+'__'+i;$TAG[i].id=$tn}
	  $id = ($TAG[i].id)
	  eval(fn)
	} 
}

//____________

//RETURN LENGTH OF ELM OR ARRAY
function $L(o){return o.length}
 

function arrFn(fn,ea,va){for(i=0;i<$L(ea);i++){eval(fn+'('+str.str(ea[i])+','+str.str(va[i])+');');}}

iif=function(c,t,f){_cr.ifev(c,t,f);}
elif= function (ci,ce,T,F){if(eval(ci)){eval(T)}else if(ce){eval(F)}}
 


 
_cr.ifrt=iif=function  (c,T,F){if(eval(c)){return T}else{return F}}
_cr.ifev= function  (c,T,F){if(eval(c)){eval(T)}else{eval(F)}}
_cr.eifev= function (ci,ce,T,F){if(eval(ci)){eval(T)}else if(ce){eval(F)}}
_cr.un  =  function(v) {if(v==_cr.U||!v||v==''){return ''}else{return v}} 
_cr.uns =  function(v) {return _cr.un(v)+' '} 

_cr.sc  = function(s) {return '/*'+s+'*/';}
  
var str={};
str.expl = function (s,p){return s.split(p)}
str.comp = function (s,c){return _cr.tfeq(s,c)}
str.rem  = function (s,q){return s.replace(q,'');}
str.rex  = function (s,q,n){r= new RegExp(' '+q+' ',"g");return s.replace(r,n)}
str.ree  = function (s,q){return str.rex(s,q,' ')}
str.remcss = function (s,q){return str.rex(s,q,'/*'+q+'*/')}
str.f = 	 function(s,f){return(s.indexOf(f) > -1);}
str.str = 	 function(s){if(typeof(s)=='string'){return "'"+s+"'";}else{return s}}
str.cap =    function(s){return s.charAt(0).toUpperCase() + s.slice(1);}
str.capjoin =function(s){return s.replace('-',' ');s.charAt(0).toUpperCase() + s.slice(1).replace(' ','');}



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

 

var tag={};
tag.ret = function(tag,inner,outer) {
	if(tag=='img'||tag=='input'){o='/>';}else{o= inner+'>'+outer+'</'+tag+'>'}
	return '<'+tag+' '+o;}
tag.ins = function(tag,ID,CLASS,inner,outer){
	return tag.ret(tag,_cr.uns(ID)+_cr.uns(CLASS)+inner,outer)
	}
//tag.img = function(src,ID,CLASS,inner,outer){
//	return tag.ins("'img'",ID,CLASS,'src="'+_cr.un(src)+'"',outer)
//	}		


var dom={};
dom.gh = dom.getHtml 		 = $gh = function (i){return $4(i).innerHTML}

//SET HTML
dom.sh = dom.setHtml 		 = $sh = function (i,h){
	if(str.f(i,'.')||str.f(i,'<'))	{$select (i,"$4($id).innerHTML="+str.str(h))}
	else							{$4(i).innerHTML=h;}} 

//APPEND & PREPEND HTML
dom.ah = dom.appendHtml 	 = $ah = function (i,h){
	if(str.f(i,'.')||str.f(i,'<'))	{$select (i,"$ah($id,"+str.str(h)+")")}
	else							{$4(i).innerHTML=dom.gh(i)+h;}} 

dom.ph = dom.prependHtml 	 = $ph = function (i,h){
	if(str.f(i,'.')||str.f(i,'<'))	{$select (i,"$ph($id,"+str.str(h)+")")}
	else							{$4(i).innerHTML=h+dom.gh(i);}} 

//REMOVE HTML
dom.rh = dom.removeHtml 	 = $rh = function (i,h){
	if(str.f(i,'.')||str.f(i,'<')) 	{$select (i,"$rh($id)")}
	else  							{$4(i).innerHTML=''}} 

//TOGGLE HTML	
dom.to = dom.toggleHtml 	 = $th = function (i,h1,h2) 
{
	if(str.f(i,'.')||str.f(i,'<')) 	{$select (i,"$th($id,"+str.str(h1)+","+str.str(h2)+")")}
	else  							{ if(dom.gh(i)==h1){dom.sh(i,h2)}else{dom.sh(i,h1)} } 
}

//OUTER HTML
//APPEND & PREPEND HTML
dom.ah = dom.appendHOuter 	 = $ao = function (i,h){
	if(str.f(i,'.')||str.f(i,'<'))	{$select (i,"$ao($id,"+str.str(h)+")")}
	else							{$4(i).outerHTML=dom.gh(i)+h;}} 

dom.ph = dom.prependOuter 	 = $po = function (i,h){
	if(str.f(i,'.')||str.f(i,'<'))	{$select (i,"$po($id,"+str.str(h)+")")}
	else							{$4(i).outerHTML=h+dom.gh(i);}} 


dom.ga = dom.getAttr 		= $ga = function (i,a){return $4(i).getAttribute(a)}
dom.sa = dom.setAttr 		= $sa = function (i,a,v){$4(i).setAttribute(a,v);i.a=v}
dom.aa = dom.appendAttr		= $aa = function (i,a,v){dom.sa(i,a,dom.ga(i,a)+v)}
dom.ra = dom.removeAttr 	= $ra = function (i,a,v){dom.sa(i,a,'')}
dom.ta = dom.toggleAttr 	= $ta = function (i,a,v1,v2){if(dom.ga(i,a)==v1){dom.sa(i,a,v2)}else{dom.sa(i,a,v1)}}

var frm={};
frm.gv = frm.getValue 		= $v  = $gv = function(i){return dom.ga(i,'value');}
frm.sv = frm.setValue 		= $sv = function (i,v){dom.sa(i,'value',v);}
frm.av = frm.appendValue 	= $av = function (i,v){frm.sv(i,frm.v(i)+v)}
frm.rv = frm.removeValue 	= $rv = function (i){frm.sv(i,'')}
frm.tv = frm.toggleValue	= $av = function (i,v1,v2){if(frm.gv(i)==v1){frm.sv(i,v2)}else{frm.sv(i,v1)}} 
 

var css={};

_cr.selDom = function(el,fn,arg){

	 {$4t(el,fn,args)}
	}



//CLASS
css._cr = function(c){return new RegExp("(^|\\s+)"+c+"(\\s+|$)");}
css._eappend = function (i,s) {
	    e=s.split(' '); 
    	for(j=0;j<$L(e);j++)
			{ 
			 if(!$hc(i,e[j])) {$sc(i,$gc(i)+' '+e[j] );}
			}
     }
css.cl  = function(i){if('classList' in $DE){return $4(i).classList}else{return css._cr(c).test(css.gc(i))}}

css.gc  = css.getClass = $gc = function(i){return $4(i).className;}

//SET CLASS
css.sc  = css.setClass = $sc = function(i,c){
	if(str.f(i,'.')||str.f(i,'<')) 	{$select (i,"$4($id).className="+str.str(c))}
	else  							{$4(i).className = c;}
} 

//REMOVE CLASS
css.rc  = css.removeClass= $rc = function(i){
	if(str.f(i,'.')||str.f(i,'<')) 	{$select (i,"$rc($id)")}
	else  							{css.sc(i,'');}} 
	
	
//APPEND CLASS
css.ac  = css.appendClass= $ac = function(i,c){
	if(str.f(i,'.')||str.f(i,'<')) 	{$select (i,"css._eappend($id,"+str.str(c)+")")}
	else  							{css._eappend(i,c);}} 
	
css.hc  = css.hasClass= $hc = function(i,c) {return css.cl(i).contains(c);}
css.dc  = css.deleteClass= $dc = function(i,c){css.sc(i, css.gc(i).replace(css._cr( c ),' '));}
css.wc  = css.swapClass= $wc = function(i,dc,ac){css.dc(i,dc);css.ac(i,ac);}
css.tc  = css.toggleClass= $tc = function(i,c){if(css.hc(i,c)){css.dc(i,c)}else{css.ac(i,c)}}
css.lc  = css.alternateClass= $lc= function(i,c1,c2){css.tc(i,c1);css.tc(i,c2)}

//STYLE
css.gs = function(i) {return $4(i).getAttribute('style')}
css.ss = function(i,s) {$4(i).setAttribute('style',s)}
css.rs = function(i,s) {css.ss(i,'')}
css.as = function(i,s) {css.ss(i,css.s(i,s)+';'+s)}

css.et  = function(e){return $4(e).offsetTop;}
css.eb  = function(e){return $4(e).clientHeight;}
function px(n){return n+'px'}

//PROPIERTY
css._pTrl = function(p) {
//p=p.split('-');f=p[0];
//for(i=1;i<=$L(p);i++)
//{p[i]=str.cap(p[i])}
return str.cap(p)}
//css.gp  = function(e)


 
 


 

 

//WINDOW/VIEWPORT
var win = {};
//get
win.g =function(d) {
        var client = $DE['client'+d],
            inner = window['client'+d];
        if( client < inner ) {return inner;} else {return client;}
    }
//Height
win.h = function() {return $DE['clientHeight'];}
//Width
win.w = function() {return $DE['clientWidth'];}
//if win size is lesser or higher
win.lesser = function(w) {if(win.w()<w){return true}} 
win.higher = function(w) {if(win.w()>w){return true}} 
//element def. view
win.is  =  function (o) {return o != null && o === o.window; }
win.g   =  function (e) {return win.is(e) ? e : e.nodeType===9 && e.defaultView;}
//TOP and LEFT
win.t   =  win.top = function(){return pageYOffset};
win.l   =  function(){return pageXOffset};
win._LS = 0;
win._SA = 0; 
win.ls  =  function() {win._SA = w.t()}
win.dif =  function(m){return eval("win._SA "+m+" win.t()");}
//win.isin = function(i,d){return eval( " win.t()-"+d+">"+css.et(i));}
//is screen top of element
win.screenTop= function(e){return win.t()>$et(e)}
//Parallaxing... v=acceleration 
win._paralax   = function(v){return (v*win.t())+'px'} //v2
win.paralaxTop = function(e,v){
	if(win.screenTop(e))
		{
			$4s(e).top=win._paralax (v); 
		}
	}

var elm = {}
elm.top    = $et = function (e){return $4(e).offsetTop;}
elm.h      = $eh = function (e){return $4(e).offsetHeight;}
elm.bottom = $eb = function (e){return $et(e)+$eh(e)}
elm.totalleft    = function (e){return ($el(e) - $4(e).scrollLeft + $4(e).clientLeft);}
elm.ony   = $eoy = function (e){return wt()>$et(e) && wt()<$eb(e) }

elm.left   = $el = function (e){return $4(e).offsetLeft;}
elm.w      = $ew = function (e){return $4(e).offsetWidth;}
elm.right  = $er = function (e){return $el(e)+$ew(e)}
elm.totaltop     = function (e){return ($et(e) - $4(e).scrollTop + $4(e).clientTop);}
elm.onx    = $eox= function (e){return wt()>$et(e) && wt()<$eb(e) }
elm.gap     =       function (e){return ($el(e) - $4(e).scrollLeft + $4(e).clientLeft);}
//return props
function prop(el){return {left:elm.left(el),top:elm.top(el),width:elm.w(el),height:elm.h(el),right:elm.right(el),bottom:elm.bottom(el)};}

 


win.gos = function( i ) {  return i.getBoundingClientRect();   }



// FIRE EVENTS LISTENERS
////////////////////////////
var event={};
_cr.event = function(i,ef,ev){if(str.f(i,'.')||str.f(i,'<')) 	{$select (i,"$4($id)."+ef+"="+str.str(ev));}
			else {eval('$4('+str.str(ev)+').'+str.str(ef)+'='+str.str(ev));}}
			
event.click = function(i,fn) {_cr.event(i,'onclick',fn);}
event.doubleclick = function(i,fn) {_cr.event(i,'ondblclick',fn);}
event.mouseout = function(i,fn) {_cr.event(i,'onmouseout',fn);}
event.mouseover = function(i,fn) {_cr.event(i,'onmouseover',fn);}
event.toggleover = function(i,fnIn,fnOut) {_cr.event(i,'onmouseover',fnIn);_cr.event(i,'onmouseout',fnOut);}
event.loaded = function(fn){document.addEventListener('DOMContentLoaded',fn)}


//THE EXCERPT
//------------------
fd_date=new Date;
$FULLYEAR = fd_date.getFullYear()
$YEAR = fd_date.getYear()
$MINUTES = fd_date.getMinutes()
$SECONDS = fd_date.getSeconds()
