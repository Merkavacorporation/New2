//|\/|erkava Corp
function yan1(){
const namer=document.getElementById("namer");
const firstnumbe=document.getElementById("number1");
const secondnumbe=document.getElementById("number2");
const result = document.getElementById("result");

const bir =parseFloat(firstnumbe.value);
const ikki =parseFloat(secondnumbe.value);
const namerval=(namer.value)
let javo = bir / ikki;
result.textContent=javo
nabe.textContent=namerval
}