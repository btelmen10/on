console.log(document);
// documenr.getElementsByTagName()-> yag nreer hndh
//var h1 = document.getElementsByTagName('h1')[0];
//console.log(h1);
//.innerText  = "solih text bicn "->tag dotrh text bicn 
//h1.innerText="snnuu"
//.style.styleName = "style utg"-> tagd style ugh 
 //*h1.style.color="brown";
//var kk = document.getElementsByTagName('h1')[1];
//console.log(h1);
//kk.innerText="side eye"
//kk.style.color="brown";
//var p = document.getElementsByTagName('p')[0];
//console.log(p);
//function clock (){
	//p.innerText = "goy haalt";
	//p.style.color="pink"; 
//}  
var ageInput = document.getElementsByTagName('input')[0];
var birthYear  = document.getElementsByTagName('h4')[0];
var currentYear = 2023, myYear;
console.log(ageInput);
console.log(birthYear);
function age (){
	myYear = currentYear - ageInput.value;
	console.log(ageInput.value);
	birthYear.innerText = "Таны төрсөн он "  + myYear;
}