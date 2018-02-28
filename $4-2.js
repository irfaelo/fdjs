var _each = Array.prototype.forEach;

function $each(el,fn)
{
	_each.call(el,fn)
}

function $$4(el,f)
{
	el = document.querySelectorAll(el);
  if(el.length ==1 && !f)
  {
   return el[0];
  }
  else  
  {
	 return el
  }
}
