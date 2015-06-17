
//$4 javascript framework //
//--------------------------
//(C) Ignacio Ramos v.0.15.61
// indianayourself.com
// Copia lo que te haga falta pero sigueme en el twitter @irfaelo / @indianayourself
// Este framework te ahorrará mucho trabajo y no tiene MUCHAS funciones innecesarias para ESO que tu TANTO quieres hacer.
'USE STRICT';

version = 001561;




//METACORE: globals fns
var   document=doc = window.document,
$DE = document.documentElement; 
function doFn(f){if(typeof f == 'function')f()}
  

var _cr={};
_cr.U = 'undefined';    

//DOM ACCESS
function $4(i){return document.getElementById(i)} //= doc.getElmbyId...
function $4s(i){return $4(i).style} //= doc.getElmbyId(i).style...

function $$4(i){return document.querySelector(i)} //= doc.qsall(i).style...
function $$4all(i){return document.querySelectorAll(i)}

function $selectQuery (qel,fn)
{ 
	[].forEach.call($$4all(qel),function(){ doFn(fn);})
}

function $each(i,as,fn)
{
 eval(as+'=[]');_cr.$select(i,as+".push($id)")
for(i=0;i<$L(eval(as));i++){doFn(fn)} 
}



//http://stackoverflow.com/a/9496574
function $attr(a)
{
  var coi = [];
  var allels = document.getElementsByTagName('*');
  for (var i = 0; i < $L(allels); i++)
  {
    if (allels[i].getAttribute(a) !== null)
    {
      // Element exists with attribute. Add to array.
      coi.push(allels[i]);
    }
  }
  return coi;
}
 

//select by tag/class [$id returns CURRENT ID in ARRAY]
_cr.$select = function(t,fn)
{  q =t.slice(1).split('>')[0];
	if(str.f(t,'.')){ $TAG = document.getElementsByClassName(t.slice(1));}
	else if(str.f(t,'<')){ $TAG = document.getElementsByTagName(q);}
	else if(str.f(t,'[')){ q =t.slice(1).split(']')[0]; $TAG = $attr(q);q=str.noalphanum(t); }
	
for(i=0;i<$L($TAG);i++)
{	//1st scope if has id name...
	$tn=($TAG[i].id);
	if($tn==''){$tn='IY__'+q+'__'+i;$TAG[i].id=$tn}
	  $id = ($TAG[i].id);  
	  $this = $4($id); 
	  doFn(fn)
	} 
}

$select = function(t,fn){
	f=/*str.rep(*/fn.toString()//,/\"/gi,'\\\"');
	f=str.rep(f,/function\s{0,1}\(\){/gi,''); eval((f.substring(0,$L(f)-1)))}


//____________

//RETURN LENGTH OF ELM OR ARRAY
function $L(o){return o.length}
 
 
//CHECK IF EXIST
function exist(i){return ($4(i)!=null)};

arrFn = $arrayfn = function (fn,ea,va){for(i=0;i<$L(ea);i++){
	eval(fn+'('+str.str(ea[i])+','+str.str(va[i])+');');
	
	}}
  
_cr.un  =  $varun  =  function(v) {if(v==_cr.U||!v||v==''){return ''}else{return v}} 
_cr.def =  $vardef = function(v,d){if(v==_cr.U||!v||v==''){return d}else{return v}}  
_cr.uns =  function(v) {return _cr.un(v)+' '} 
_cr.sc  =  function(s)  {return '/*'+s+'*/';}
_cr._nid = function (i){return str.f(i,'.')||str.f(i,'<')||str.f(i,'[')}
  

var str={};
str.expl = str.explode = function (s,p){return s.split(p)}
str.comp = str.compare = function (s,c){return (s==c)}
str.rem  = str.remove = function (s,q){return s.replace(q,'');}
str.trim = function (s,n){return s.substring(0,$L(s)-q);}
str.rep  = str.replace = function (s,a,b){return s.replace(a,b);}
str.rex  = str.regexp = function (s,q,n){r= new RegExp(' '+q+' ',"g");return s.replace(r,n)}
str.ree  = str.regexpesp = function (s,q){return str.rex(s,q,' ')}
str.remcss = function (s,q){return str.rex(s,q,'/*'+q+'*/')}
str.f = 	str.find = function(s,f){return(s.indexOf(f) > -1);}
str.str = str.isStr =	 function(s){if(typeof(s)=='string'){return "'"+s+"'";}else{return s}}
str.cap =    function(s){return s.charAt(0).toUpperCase() + s.slice(1);}
str.capjoin =function(s){return s.replace('-',' ');s.charAt(0).toUpperCase() + s.slice(1).replace(' ','');}
str.noalphanum = function(s) {return s.replace(/\W/g, '')}

//URL METHODS
var url = {};
url.hash = function(){return str.f(location.toString(),'#')}
url.queryStr = $qs = function (s,q){ r=[1,0] 
    s=str.expl(s,'&');
    for(i=0;i<$L(s);i++){
        x=str.expl(s[i],'=');
        if(q==x[r[0]])
        {return x[r[1]]} 
    }
}

//TAG METHODS
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
$script = function(s){$ph('<head>',tag.ret('script','src="'+s+'"',''));}	


//DOM
var dom={};
dom.getHtml 		 = $gh = function (i){return $4(i).innerHTML}

//SET HTML
dom.setHtml 		 = $sh = function (i,h){
	if(_cr._nid(i))	{_cr.$select (i,"$4($id).innerHTML="+str.str(h))}
	else							{$4(i).innerHTML=h;}} 

//APPEND & PREPEND HTML
dom.appendHtml 	 = $ah = function (i,h){
	if(_cr._nid(i))	{_cr.$select (i,"$ah($id,"+str.str(h)+")")}
	else							{$4(i).innerHTML=dom.gh(i)+h;}} 
dom.prependHtml 	 = $ph = function (i,h){
	if(_cr._nid(i))	{_cr.$select (i,"$ph($id,"+str.str(h)+")")}
	else							{$4(i).innerHTML=h+dom.gh(i);}} 

//REMOVE HTML
dom.removeHtml 	 = $rh = function (i,h){
	if(_cr._nid(i)) 	{_cr.$select (i,"$rh($id)")}
	else  							{$4(i).innerHTML=''}} 

//TOGGLE HTML	
dom.toggleHtml 	 = $th = function (i,h1,h2) 
{
	if(_cr._nid(i)) 	{_cr.$select (i,"$th($id,"+str.str(h1)+","+str.str(h2)+")")}
	else  							{ if(dom.gh(i)==h1){dom.sh(i,h2)}else{dom.sh(i,h1)} } 
}

//OUTER HTML
//APPEND & PREPEND HTML
dom.appendHOuter 	 = $ao = function (i,h){
	if(_cr._nid(i))	{_cr.$select (i,"$ao($id,"+str.str(h)+")")}
	else							{$4(i).outerHTML=dom.gh(i)+h;}} 
dom.prependOuter 	 = $po = function (i,h){
	if(_cr._nid(i))	{_cr.$select (i,"$po($id,"+str.str(h)+")")}
	else							{$4(i).outerHTML=h+dom.gh(i);}} 

//ATTRIBUTES
//dom.getAttr 	   = $ga = function (i,a){return $4(i).getAttribute(a)}
dom.getAttr 	   = $ga = function (i,a){
	if(_cr._nid(i)) 	{_cr.$select (i,"$ga($id,"+str.str(a)+")")}
	else  							{ return $4(i).getAttribute(a)  } }

dom.setAttr 	   = $sa = function (i,a,v){$4(i).setAttribute(a,v);i.a=v}
dom.appendAttr	= $aa = function (i,a,v){dom.sa(i,a,dom.ga(i,a)+v)}
dom.removeAttr 	= $ra = function (i,a,v){dom.sa(i,a,'')}
dom.toggleAttr 	= $ta = function (i,a,v1,v2){if(dom.ga(i,a)==v1){dom.sa(i,a,v2)}else{dom.sa(i,a,v1)}}
 
//AJAX
var ajax = {};

ajax._preload = function(url,fn,met,async) {
     met = _cr.def(met,'GET');async = _cr.def(async,true)
	 var xhr;
    if (window.XMLHttpRequest) {xhr=new XMLHttpRequest();}
	else {xhr = new ActiveXObject("Microsoft.XMLHTTP");}

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 ) {
           if(xhr.status == 200){$xhr = xhr.responseText;doFn(fn);}
           else if(xhr.status == 400) {	alert('Error 400')}
           else {alert('Error 200')}
        }
    }
    xhr.open(met, url, async);xhr.send();
}
ajax.load 	 = function (i,u,f){ f=_cr.def(f,'$sh');  
		if(_cr._nid(i))	 {_cr.$select (i,"ajax._preload('"+(u)+"',f+'('+str.str($id)+',$xhr)')")}
	    else             {ajax._preload(u,f+'('+str.str(i)+',$xhr)')}} 


ajax.loadEach = function(i,u) {$each(i,'$el',u)}


//FORM
var frm={};
frm.getValue 	   = $v  = $gv = function(i){return dom.ga(i,'value');}
frm.setValue 		= $sv = function (i,v){dom.sa(i,'value',v);}
frm.appendValue 	= $av = function (i,v){frm.sv(i,frm.v(i)+v)}
frm.removeValue 	= $rv = function (i){frm.sv(i,'')}
frm.toggleValue	= $tv = function (i,v1,v2){if(frm.gv(i)==v1){frm.sv(i,v2)}else{frm.sv(i,v1)}} 
 

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
css.cl  = function(i){if('classList' in $DE){return $4(i).classList}else{return css._cr(c).test($gc(i))}}

css.getClass = $gc = function(i){return $4(i).className;}

//SET CLASS
css.setClass = $sc = function(i,c){
	if(_cr._nid(i)) 	{_cr.$select (i,"$4($id).className="+str.str(c))}
	else  							{$4(i).className = c;}
} 

//REMOVE CLASS
css.removeClass= $rc = function(i){
	if(_cr._nid(i)) 	{_cr.$select (i,"$rc($id)")}
	else  							  {css.sc(i,'');}} 
 
//APPEND CLASS
css.appendClass= $ac = function(i,c){
	if(_cr._nid(i)) 	{_cr.$select (i,"css._eappend($id,"+str.str(c)+")")}
	else  							{css._eappend(i,c);}} 
	
css.hasClass= $hc = function(i,c) {return css.cl(i).contains(c);}
css.deleteClass= $dc = function(i,c){$sc(i, $gc(i).replace(css._cr( c ),' '));}
css.swapClass= $wc = function(i,dc,ac){$dc(i,dc);$ac(i,ac);}
css.toggleClass= $tc = function(i,c){if($hc(i,c)){$dc(i,c)}else{$ac(i,c)}}
css.alternateClass= $lc= function(i,c1,c2){$tc(i,c1);$tc(i,c2)}

//STYLE ATTR
css.gs = function(i) {return $4(i).getAttribute('style')}
css.setStyle = $ss = function(i,s) {//$4(i).setAttribute('style',s)}
	if(_cr._nid(i)) 				{_cr.$select (i,"$ss($id,"+str.str(s)+")")}
	else  							{ ($4(i).getAttribute('style'));}} 
 
css.rs = function(i,s) {css.ss(i,'')}
css.as = function(i,s) {css.ss(i,css.s(i,s)+';'+s)}

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
win.h = $wh = function() {return $DE['clientHeight'];}
//Width
win.w = $ww = function() {return $DE['clientWidth'];}
//if win size is lesser or higher
win.lesser = function(w) {if(win.w()<=w){return true}} 
win.higher = function(w) {if(win.w()>w){return true}} 
//element def. view
win.is  =  function (o) {return o != null && o === o.window; }
win.g   =  function (e) {return win.is(e) ? e : e.nodeType===9 && e.defaultView;}
//TOP and LEFT
win.t   = $wt =  win.top = function(){return pageYOffset};
win.l   = $wl =  function(){return pageXOffset};
win._LS = 0;
win._SA = win.lastYposition = 0; 
win.ls  = win.lastScroll = function() {win._SA = w.t()}
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
win.scrollX = $wx = function( ) {  return window.scrollX;}
win.scrollY = $wy = function( ) {  return window.scrollY;} 
win.gos = function( i ) {  return i.getBoundingClientRect();   }
win.diffTop = function( i ) {  return win.gos(i).top  + $wy();}
win.diffLeft = function( i ) { return win.gos(i).left + $wx();} 
win.smartphone 	= 480;
win.tablet 		= 768;
win.isSmartphone = function() {  return (win.w()<win.smartphone);   }
win.isTablet = function() {return(win.w()<win.tablet && win.w()>win.smartphone);}




var elm = {}
elm.top    = $et = function (e){ return $4(e).offsetTop;}
elm.height = $eh = function (e){return $4(e).offsetHeight;}
elm.bottom = $eb = function (e){return $et(e)+$eh(e)}
elm.totalleft    = function (e){return ($el(e) - $4(e).scrollLeft + $4(e).clientLeft);}
elm.onY   = $eony = function (e){return wt()>$et(e) && wt()<$eb(e) }

elm.left   = $el = function (e){return $4(e).offsetLeft;}
elm.w      = $ew = function (e){return $4(e).offsetWidth;}
elm.right  = $er = function (e){return $el(e)+$ew(e)}
elm.totaltop     = function (e){return ($et(e) - $4(e).scrollTop + $4(e).clientTop);}
elm.onx    = $eonx= function (e){return wt()>$et(e) && wt()<$eb(e) }
elm.gap     =       function (e){return ($el(e) - $4(e).scrollLeft + $4(e).clientLeft);}
//return props
function prop(el){return {left:elm.left(el),top:elm.top(el),width:elm.w(el),height:elm.h(el),right:elm.right(el),bottom:elm.bottom(el)};}

 






// FIRE EVENTS LISTENERS
////////////////////////////
var event={};
_cr.event = function(i,ef,ev){if(_cr._nid(i)) 	
{ _cr.$select (i,"$4($id)."+ef+"="+str.str(ev));}
else 
{eval("$4("+str.str(i)+")."+ef+"="+ev) ;}}

_cr._ev_isOutside = function(evt, parent) {
  var elem = evt.relatedTarget || evt.toElement || evt.fromElement
  while ( elem && elem !== parent) {elem = elem.parentNode;}
  if ( elem !== parent) {return true}
}
//eval('$4('+str.str(i)+').'+str.str(ef)+'='+str.str(ev));}}
			
event.click = function(i,fn) {_cr.event(i,'onclick',fn);}
event.doubleclick = function(i,fn) {_cr.event(i,'ondblclick',fn);}

 
/*event.mouseout = function(i,fn) {_cr.event(i,'onmouseout',function (event){e = event.toElement || event.relatedTarget;
    if (e.parentNode == this || e == this) {return;}
    alert(8)})}*/


event.mouseover = function(i,fn) {_cr.event(i,'onmouseover',fn);}
event.toggleover = function(i,fnIn,fnOut) {_cr.event(i,'onmouseover',fnIn);_cr.event(i,'onmouseout',fnOut);}
event.loaded = function(fn){document.addEventListener('DOMContentLoaded',fn)}

function onscreen(dimX,fn){
	 window.onload = window.onresize = function(){if(win.w()>=dimX){doFn(fn)}}
  }

  



//DIRECTIVES PLACEHOLDER
event.loaded(function()
	{
	  ajax.loadEach('[data-ajax-place]',"ajax.load($el[i],$ga($el[i],'data-ajax-place'))");
	  ajax.loadEach('[data-var-place]',"$sh($el[i],eval($ga($el[i],'data-var-place')))"); 
	})	


//THE EXCERPT
//------------------
$date=new Date;
$FULLYEAR = $date.getFullYear()
$YEAR = $date.getYear()
$MINUTES = $date.getMinutes()
$SECONDS = $date.getSeconds()
