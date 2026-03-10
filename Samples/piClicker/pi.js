const update=document.getElementById('update');
var piSpan=document.getElementById('pi');
var termSpan=document.getElementById('term');

var term=parseFloat(termSpan.innerHTML)
var pi=parseFloat(piSpan.innerHTML);
var clicks=0;
function addTerm(){
	clicks=clicks+1;
	term=parseFloat(4*((-1)**clicks)/(2*clicks+1));
	pi=pi+term
	piSpan.innerHTML=pi
	termSpan.innerHTML=term;
}

update.addEventListener('click', addTerm);